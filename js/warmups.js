"use strict";

let max = "..........".length;

for (let i = ".".length; i <= (max * max); i++) {
    if (i % 15 === 0 ) {
        console.log(i + "  is FizzBuzz");
    } else if (i % 5 === 0) {
        console.log(i + " is Buzz");
    }else if (i % 3 === 0 ) {
        console.log(i + " is Fizz")
    }else {
    console.log(i);
    }
}

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
    const animals =["dog", "cat", "Frog", "Bat"]

    function firstLetter(animals){
        let bucket = "";
    for (let el in animals) {
        bucket = +el[0]


    }
}
firstLetter()

