"use strict";

// while loop

function multipleByTwo() {
    let x = 1
    while (x < 65536) {
        x *= 2;
        console.log(x);
    }
}

multipleByTwo()


const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
let inventory = randomNumber(50, 100);
let customerOrder = randomNumber(1, 5);
do {
    console.log("customer orders " + customerOrder + " cone(s). We have " + inventory + " left in stock");
} if (customerOrder > inventory) {
    console.log(" My apologies, we can't fulfill your order. ");
} else if {
(customerOrder -= inventory);
    console.log("Here you go!, We have " + inventory + " left in stock");
}
while (inventory > 0) {
    console.log(" Daily mission complete, all cones sold");
}
