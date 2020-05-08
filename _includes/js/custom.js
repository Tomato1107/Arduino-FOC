var classNames = [
    "BLDCMotor",
    "Encoder",
    "MagneticSensor",
    "PciListenerImp",
    "PciManager",
    "Serial"
];

var classProps = [
    "PI_velocity",
    "P_angle",
    "LPF_velocity",
    "PI_velocity_index_search",
    "P",
    "I",
    "Tf",
    "voltage_ramp",
    "quadrature",
    "pullup",
    "voltage_limit",
    "voltage_power_supply",
    "index_search_velocity",
    "controller",
    "velocity_limit"
];

var funcNames = [
    "init",
    "initFOC",
    "enableInterrupts",
    "handleA",
    "handleB",
    "handleIndex",
    "registerListener",
    "linkSensor",
    "useDebugging",
    "monitor",
    "print",
    "println",
    "getVelocity",
    "getAngle",
    "loopFOC",
    "move",
];
var structNames = [
    "Pullup",
    "Quadrature",
    "ControlType"
];
var structProps = [
    "EXTERN",
    "INTERN",
    "ENABLE",
    "DISABLE",
    "angle",
    "velocity",
    "voltage",
];
jtd.onReady(function(){
document.querySelectorAll('.n').forEach(function(e) {
    if(classNames.indexOf(e.innerHTML) >= 0 ){
        e.classList.remove("n");
        e.classList.add("className");
    } else if(funcNames.indexOf(e.innerHTML) >= 0 ){
        e.classList.remove("n");
        e.classList.add("fcnName");
    } else if(structNames.indexOf(e.innerHTML) >= 0 ){
        e.classList.remove("n");
        e.classList.add("structName");
    } else if(structProps.indexOf(e.innerHTML) >= 0 ){
        e.classList.remove("n");
        e.classList.add("structProp");
    } else if(classProps.indexOf(e.innerHTML) >= 0 ){
        e.classList.remove("n");
        e.classList.add("fcnName");
    }
    // return html.replace(reg, '<span class="red">$1</span>', html)
});
});