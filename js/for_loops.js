"use strict";


const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// 2
function showMutiplicationTable(num) {
    for (let i = 1; i < 11; i++) {
        let answer = i * num;
        let str = num + ' x ' + i + ' = ' + answer
        console.log(str);
    }
}

showMutiplicationTable(7)

// 3
for (let i = 0; i < 10; i++) {
    let random = randomBetween(20, 200);
    if (random % 2 === 0) {
        console.log(random + " is Even.");
    } else {
        console.log(random + " is Odd");
    }
}

// 4
let str = '';

for (let i = 0; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        str += i;
    }
    str += '\n';
}
console.log(str);

// 5
    for (let i = 100; i > 0; i-=5 ){
  console.log(i);
    }

