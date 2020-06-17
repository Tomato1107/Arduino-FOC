---
layout: default
title: Field Oriented Control 
parent: Theory corner
grand_parent: Digging deeper
grand_grand_parent: Arduino <span class="simple">Simple<span class="foc">FOC</span>library</span>
description: "Arduino Simple Field Oriented Control (FOC) library ."
nav_order: 1
permalink: /foc_theory
---

# Field Oriented Control routine 
    
## Initializing - `setup()`
After the motor and encoder are initialized and the driver and control loops are configured you initialize the FOC algorithm. 
```cpp
// align encoder and start FOC
motor.initFOC();
```
This function aligns encoder and motor zero positions and initializes FOC variables. It is intended to be run in the `setup` function of the Arduino. After the call of this function FOC is ready to start following your instructions.

## Real-time execution `loop()`

The real time execution of the Arduino Simple FOC library is governed by two functions `motor.loopFOC()` and `motor.move(float target)`.
```cpp
// iterative setting FOC phase voltage
// the faster you run this function the better
// in arduino loop it should have ~1kHz
// the best would be to be in ~10kHz range
motor.loopFOC();
```
The function `loopFOC()` gets the current motor angle from the encoder, turns in into the electrical angle and computes Clarke transform to set the desired <i>U<sub>q</sub></i> voltage to the motor. Basically it implements the functionality of the [voltage control loop](/voltage_loop).
- The faster you can run this function the better 
- In the empty arduino loop it runs at ~1kHz but ideally it would be around ~10kHz


```cpp
// iterative function setting the outer loop target
// velocity, position or voltage
// this function can be run at much lower frequency than loopFOC function
// it can go as low as ~50Hz
motor.move(target);
```
The `move()` method executes the control loops of the algorithm. If is governed by the `motor.controller` variable. It executes either pure voltage loop, velocity loop or angle loop.

It receives one parameter `BLDCMotor::move(float target)` which is current user define target value.
- If the user runs [velocity loop](/velocity_loop), `move` function will interpret `target` as the target velocity <i>v<sub>d</sub></i>.
- If the user runs [angle loop](/angle_loop), `move` will interpret `target` parameter as the target angle<i>a<sub>d</sub></i>. 
- If the user runs the [voltage loop](/voltage_loop), `move` function will interpret the `target` parameter as voltage <i>u<sub>d</sub></i>.


## Power supply voltage
The default  `voltage_power_supply`  value is set to `12V`. If you set your power supply to some other value, change it here for the control loops to adapt.
```cpp
// power supply voltage
motor.voltage_power_supply = 12;
```
The `voltage_power_supply` value tells the FOC algorithm what is the maximum voltage it can output. Additionally since the FOC algorithm implemented in the Simple FOC library uses sinusoidal voltages the magnitudes of the sine waves exiting the Driver circuit is going to be  `[-voltage_power_supply/2, voltage_power_supply/2]`.

<img src="../extras/Images/sine_foc.png" >

