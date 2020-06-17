---
layout: default
title: Motor commands
parent: Using the Code
nav_order: 6
permalink: /communication
grand_parent: Arduino <span class="simple">Simple<span class="foc">FOC</span>library</span>
---


# Motor commands

Motor commands interface is implemented in the function `motor.command()`, and it should receive a `String` with the desired user command:
```cpp
motor.command(user_command);
```
Using this function, user can set the configuration parameters of the motor, target value of the control loop and read them by outputting them to the monitoring port( if available ) :
- configure PID controller constants
- change motion control loops
- monitor motor variables
- set target values
- check all the configuration values 

The best way to implement this 

## List of motor commands:
- **P**: velocity PI controller P gain
- **I**: velocity PI controller I gain
- **L**: velocity PI controller voltage limit
- **R**: velocity PI controller voltage ramp
- **F**: velocity Low pass filter time constant
- **K**: angle P controller P gain
- **N**: angle P controller velocity limit
- **C**: control loop 
  - **0**: voltage 
  - **1**: velocity 
  - **2**: angle
- **V**: get motor variables
  - **0**: currently set voltage
  - **1**: current velocity
  - **2**: current angle
  - **3**: current target value

To read the config value just enter the command letter.
For example: 
- to read velocity PI controller P gain run: P
- to set velocity PI controller P gain  to 1.2 run: P1.2

To change the target value just enter a number in the terminal:
For example: 
- to change the target value to -0.1453 enter: -0.1453
- to get the current target value enter: V3 

List of commands:
- P: velocity PI controller P gain
- I: velocity PI controller I gain
- L: velocity PI controller voltage limit
- R: velocity PI controller voltage ramp
- F: velocity Low pass filter time constant
- K: angle P controller P gain
- N: angle P controller velocity limit
- C: control loop 
  - 0: voltage 
  - 1: velocity 
  - 2: angle
- V: get motor variables
  - 0: currently set voltage
  - 1: current velocity
  - 2: current angle
  - 3: current target value


## Example code using the motor commands

```cpp
#include <SimpleFOC.h>

// magnetic sensor instance
MagneticSensor AS5x4x = MagneticSensor(10, 16384, 0x3FFF);

// motor instance
BLDCMotor motor = BLDCMotor(9, 5, 6, 11, 8);

void setup() {

  // initialize magnetic sensor hardware
  AS5x4x.init();
  // link the motor to the sensor
  motor.linkSensor(&AS5x4x);

  // choose FOC modulation
  motor.foc_modulation = FOCModulationType::SpaceVectorPWM;

  // power supply voltage [V]
  motor.voltage_power_supply = 12;

  // set control loop type to be used
  motor.controller = ControlType::voltage;

  // controller configuration based on the control type 
  motor.PI_velocity.P = 0.2;
  motor.PI_velocity.I = 20;
  // default voltage_power_supply
  motor.PI_velocity.voltage_limit = 12;

  // velocity low pass filtering time constant
  motor.LPF_velocity.Tf = 0.01;

  // angle loop controller
  motor.P_angle.P = 20;
  // angle loop velocity limit
  motor.P_angle.velocity_limit = 50;

  // use monitoring with serial for motor init
  // monitoring port
  Serial.begin(115200);
  // comment out if not needed
  motor.useMonitoring(Serial);

  // initialize motor
  motor.init();
  // align encoder and start FOC
  motor.initFOC();

  // set the initial target value
  motor.target = 2;


  Serial.println("Full control example: ");
  Serial.println("Run user commands to configure and the motor (find the full command list in docs.simplefoc.com) \n ");
  Serial.println("Initial motion control loop is voltage loop.");
  Serial.println("Initial target voltage 2V.");
  
  _delay(1000);
}


void loop() {
  // setting FOC phase voltage
  motor.loopFOC();

  // motion control execution
  motor.move();
  
  // user communication
  serialReceiveUserCommand();
}

// utility function enabling serial communication function with the user
// user can set the target values and set/get the motor configuration using motor commands 
// see documentation for full command list 
// 
// this function can be implemented in serialEvent function as well
void serialReceiveUserCommand() {
  
  // a string to hold incoming data
  static String received_chars;
  
  while (Serial.available()) {
    // get the new byte:
    char inChar = (char)Serial.read();
    // add it to the string buffer:
    received_chars += inChar;

    // end of user input
    if (inChar == '\n') {
      
      // execute the user command
      motor.command(received_chars);

      // reset the command buffer 
      received_chars = "";
    }
  }
}
  ```
