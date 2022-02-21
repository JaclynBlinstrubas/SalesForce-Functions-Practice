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

// const calculateGearRatio = function (driverGear, drivenGear) {
//   return driverGear / drivenGear
// }
// // the rest works the same
// let gearRatio = calculateGearRatio(42, 30)
// console.log(gearRatio) // 1.4

// --------------

//// RETURNING A FUNCTION  ////

// // when invoked, this function will assign a function
// function gearFactory() {
//   return function (driverGear, drivenGear) {
//     return driverGear / drivenGear
//   }
// }
// // calculateGearRatio can now be invoked as a function
// const calculateGearRatio = gearFactory()
// // and all the rest

// --------------

//// ANONYMOUS FUNCTIONS ////

let myArray = [1, 5, 11, 17]
let newArray = myArray.map(function (item) {
  return item / 2
})
console.log(newArray) // [0.5, 2.5, 5.5, 8.5]
