// Define the initial smart-home security conditions.
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check whether every required security condition is satisfied.
function checkSecurity() {
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  console.log(isSecure ? "Secure" : "Unsafe");
  console.log(`Door locked: ${isDoorLocked}, Window closed: ${isWindowClosed}`);
  console.log(`Alarm on: ${isAlarmOn}, Owner inside: ${isOwnerInside}`);
}

// Test multiple combinations of conditions.
checkSecurity();

isOwnerInside = false;
checkSecurity();

isOwnerInside = true;
isAlarmOn = false;
checkSecurity();

// Demonstrate OR and NOT operators as additional logical checks.
console.log(`At least one opening is unsecured: ${!isDoorLocked || !isWindowClosed}`);