//// FUNCTION DECLARATION ////

// // declare function
// function calculateGearRatio(driverGear, drivenGear) {
//   return driverGear / drivenGear
// }
// // call function
// let gearRatio = calculateGearRatio(42, 30)
// console.log(gearRatio) // 1.4

// --------------

// // call function
// let gearRatio = calculateGearRatio(42, 30);
// // function is declared after the line it is called
// // this is allowed in function declaration
// function calculateGearRatio(driverGear, drivenGear){
//   return (driverGear / drivenGear);
// }
// console.log(gearRatio); // 1.4

// --------------

//// FUNCTION EXPRESSIONS ////

const calculateGearRatio = function (driverGear, drivenGear) {
  return driverGear / drivenGear
}
// the rest works the same
let gearRatio = calculateGearRatio(42, 30)
console.log(gearRatio) // 1.4
