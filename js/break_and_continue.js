"use strict";
(function() {
// 2


    for (let i = 1; i <= 50; i++) {
        let input = prompt("Please enter an odd number between 1 and 50.")
        if (input % 2 === 0) {
            alert("That isn't an odd number");
            continue;
        } else
            alert("Here is an odd number: " + input)
        break;
    }
// 3
// let input = parseFloat(prompt(" Give me a number"))
//
//
// for (let i = 1; i < 50; i += 2) {
//     if (i === input ) {
//         console.log(" Yikes! Skipping number : " + input);
//     } else {
//         console.log(" Here is an odd number: " + i)
//     }
// }
})();