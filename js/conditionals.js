"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// let color = prompt( " What is your favorite color?").toLowerCase().trim()
//
// function analyzeColor(color){
//     if (color ==="blue"){
//         alert("Wow!, That's the same color as the ocean!");
//     }else if (color === " red") {
//         alert("You must like fast cars!");
//     }else {
//         alert (" What a great choice! Not everybody likes " + color)
//     }
// }

// console.log(analyzeColor(color));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 //  */
// function analyzeColor(color) {
//     switch (color) {
//         case "Blue" :
//             alert("Wow! that is the same color as the ocean");
//             break;
//         case "red" :
//             alert("you must love fast and sporty cars!");
//             break;
//         default:
//             alert("You are indeed special because not many people like " + color + ".")
//     }
// }
//     analyzeColor(color)
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let favColor = prompt(" What is your Favorite color?").toLowerCase().trim()
// function analyzeColor(favColor){
//     return alert(" Your favorite color is " + favColor +"!")
// }
// analyzeColor(favColor)
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// let totalAmount = 400

function calculateTool(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case (0):
            alert("Unfortunately there are no discount. Your total is " + totalAmount + "!")
            break;
        case (1):
            alert("Congrats! you eligble for a 10% discount. Your Total is " + totalAmount * .10 + "!")
            break;
        case (2):
            alert("Congrats! you eligble for a 25% discount. Your Total is " + totalAmount * .25 + "!")
            break;
        case (3):
            alert("Congrats! you eligble for a 35% discount. Your Total is " + totalAmount * .35 + "!")
            break;
        case (4):
            alert("Congrats! you eligble for a 50% discount. Your Total is " + totalAmount * .50 + "!")
            break;
        case (5):
            alert("Congrats! you don't have to pay for anything. Your Total is " + totalAmount * .0 + "!")
            break;

    }
}

// console.log(calculateTool(luckyNumber, totalAmount));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// let luckyNumber = Math.floor(Math.random() * 6);
// let totalAmount = prompt(" What was the total amount of the bill?")
//
// function calculateTool() {
//     switch (luckyNumber) {
//         case (0):
//             alert("Unfortunately there are no discount. Your total is " + totalAmount + "!")
//             break;
//         case (1):
//             alert("Congrats! your lucky number is 1!, Your original Total is " + totalAmount + "but your final price is " + (totalAmount * .10) + "after the discount")
//             break;
//         case (2):
//             alert("Congrats! your lucky number is 2!, Your original Total is " + totalAmount + "but your final price is " + (totalAmount * .25) + " after the discount")
//             break;
//         case (3):
//             alert("Congrats! your lucky number is 3!, Your original Total is " + totalAmount + "but your final price is " + (totalAmount * .35) + " after the discount")
//             break;
//         case (4):
//             alert("Congrats! your lucky number is 4!, Your original Total is " + totalAmount + "but your final price is " + (totalAmount * .50) + " after the discount")
//             break;
//         case (5):
//             alert("Congrats! your lucky number is 5!, Your original Total is " + totalAmount + "but your final price is " + (totalAmount * 0) + " after the discount")
//             break;
//
//     }
//
// }
//
// calculateTool()

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let yes = (confirm("Would you like to enter a number?"))

function evenOdd() {
    let num;
    if (yes === true) {
        num = parseFloat((prompt(" Enter your number.")))
    } else {
        return;
    }
    if (num % 2 === 0) {
        alert(" Your number is an even number.")
    } else {
        alert(" Your number is a odd number")
    }
    alert(num + 100);
    if (num < 0) {
        alert(" Your number is a negative number.")
    } else {
        alert(" your number is a positive number.")
        {
            return;
        }
    }


}

evenOdd()