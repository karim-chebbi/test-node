// console.log("Hello world!");

// let a = 10;
// let b = 2;

// const calcul = require('./localModules')

// console.log(calcul.plus(8,12))

// console.log(a*b)

// LocalModules

// import local modules

// let calcul = require('./localModules');

// console.log(calcul.plus(5, 3))

// console.log(calcul.minus(5, 3))

// let array = require('./localModules')


// Core modules

// fs
// file system

// http


// require fs
const fs = require('fs')

// Create file uqing fs

// fs.writeFile('Tunisia.txt', 'Hello Tunisia!', function(err) {
//     if (err) throw err;
//     console.log('File created successfully !');
// })

// // Read file using fs Asynchroun

// // Step 1
// console.log("Startiiiiiiiing...")


// // // Step 2
// fs.readFile('./Tunisia.txt', function(err, data) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log("Asynchrounous Read" + data.toString())
// })

// // // Step 3
// console.log("Finishiiiiiing...")






// Read file using fs Synchroun

// Step 1
// console.log("Startiiiiiiiing...")

// // // Step 2
// let data = fs.readFileSync("./Tunisia.txt");
// console.log('Synchronous Read', data.toString());


// // // Step 3
// console.log("Finishiiiiiing...")

