//1
function checkForNumber(input) {
    if (typeof input === "number") {
        return "number"

    } else {
        return "not a number"
    }
}

//2
function evenOrOdd(input) {
    if (number % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
a
//3
function doubleTheElement(arr) {
    let double = []
    for (let num of arr) {
        double.push(num * 2);
    }
    return double;
}

//4
function sumOfElements(arr) {
    let bucket = 0;
    arr.forEach(function (num) {
        bucket += num;
    })
    return bucket
}

//5
function totalPrice(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].price
    }
    return total;
}

//6

function findHighestPrice(arr){
    let bucket = 0;
    for (let product of arr){
        if (product.price > bucket){
            bucket = product.price
        }
    }
    return bucket;
}

//7

function discountCheck(input){
    if (input.clubmember === true || totalPrice(input.items) > 150){
        return true;
    }else{
        return false;
    }
}

//8
function newProduct(name,price){
    return {
        name : name,
        price: price
    }
}

//9
function countWords(str) {
    if ( str === ""){
        return 0 ;
    }else{
        let words = str.split(' ');
        return words.length
    }
}

//10
function describeNumber(num){
    if(!isNaN(parseFloat(num))){
        let obj = {}
        obj.value = parseFloat(num) ;
        obj.evenOrOdd = evenOrOdd(num)
        obj.numbersOfDigits  = num.toString().length;
        return obj
    }
}

//11

function screamingSnakeCase(str){
    let upperCaseStr = str.toUpperCase();
    let array = upperCaseStr.split(' ')
    let finalStr = array.join('_')
    return finalStr;




}






