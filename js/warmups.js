"use strict";

// let max = "..........".length;
//
// for (let i = ".".length; i <= (max * max); i++) {
//     if (i % 15 === 0 ) {
//         console.log(i + "  is FizzBuzz");
//     } else if (i % 5 === 0) {
//         console.log(i + " is Buzz");
//     }else if (i % 3 === 0 ) {
//         console.log(i + " is Fizz")
//     }else {
//     console.log(i);
//     }
// }

// Instructor Code

// function fizzBuzz(limit) {
//     if (limit === undefined) {
//         limit = 100;
//     }
//     for (let i = 1; i <= limit; i++) {
//         if (i % 15 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else if (i % 3 === 0) {
//             console.log("FizzBuzz");
//         } else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(i);

//April 27th  Warm-ups
//     const animals =["dog", "cat", "Frog", "Bat"]
//
//     function firstLetter(animals){
//         let bucket = "";
//     for (let el in animals) {
//         bucket = +el[0]
//
//
//     }
// }
// firstLetter()

// April 28th Warm-ups
//
// function alphabetOrder(str) {
// let strArray = str.split('');
// console.log(strArray)
//  let sortedArray = strArray.sort()
//  console.log(sortedArray);
// return sortedArray
// return str.split('').sort().join('')


// console.log(alphabetOrder("codeup"))

// function sumOfAllElements([a,b,c,d] ){
//     const sum = [a,b,c,d ].reduce((partialSum, a) => partialSum + a, 0);
//     console.log(sum);
// }
// sumOfAllElements([1,2,3,4,5])

// function sumOfAllElements(arr) {
//     let bucket = o;
//     for (let el of arr) {
//         bucket += el
//     }
//     return bucket
// }
// sumOfAllElements();

// function returnProductEssentialDetails(product){
//     return {name: product.name,
//             priceInCents: product.priceInCents}
//             }
//             let product1 = {
//                 name: 'Hammar',
//                 priceInCents: 400,
//                 description: 'It is a a hammar.',
//                 inventory: 25034
//             }
//
//             let product2 = {
//                 name: 'Computer',
//                 priceInCents: 40000,
//                 description: 'It is a computer.',
//                 inventory: 33000
//             }
//
//             let product3 = {
//                 name: 'Ruler',
//                 priceInCents: 1000,
//                 description: 'It is a ruler.',
//                 inventory: 2200
//             }
// console.log(returnProductEssentialDetails(product1));;
// console.log(returnProductEssentialDetails(product2));;
// console.log(returnProductEssentialDetails(product3));;

//Git review
//
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "Spetember 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];

// function getTallest(arr) {
//     let tallest = {heightInMM: 0};
//     for (let hamster of arr) {
//         if (hamster.heightInMMv > tallest.heightInMM) {
//             tallest = hamster
//         }
//     }
// }
// console.log(getTallest(hamsters));

// function getColorful(arr) {
//     let colorful = {fur: []};
//     for (let hamster of hamsters){
//         if (hamster.fur.length > colorful.fur.length){
//             colorful = hamster
//         }
//     }
//     return colorful
//
// }
// console.log(getColorful(hamsters))


// My incomplete Attempt
// function makeObjectFromString(arr) {
//     let str = {arr: [""]};
//     for (let str of arr) {
//
//     }

// instructor's Code

    // function makeObjectFromString(str) {
    //     const obj = {};
    //     obj.string = str;
    //     obj.size = str.length;
    //     obj.isOneWord = str.indexOf("") < 0;
    //     let lc = str.toLowerCase()
    //     if (lc.includes("r") || lc.includes("s") || lc.includes("t") || lc.includes("l") || lc.includes("n") || lc.includes("e")) {
    //         obj.containsLetterFromRSTILNE = true;
    //     } else {
    //         obj.containsLetterFromRSTILNE = false;
    //     }
    // }
    //
    // return obj;


// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.map(n => n * 3))

