const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//array of 3 or more languages

let moreThanThree = users.filter(person => {
    return person.languages.length >= 3 ? person : null

})
console.log(moreThanThree)

//map to create array of emails

let userEmails = users.map(function (user) {
    return user.email
})
console.log(userEmails)

//reduce to get total
const totalExp = users.reduce((total,user) => total + user.yearsOfExperience,0)

let average = totalExp/users.length
console.log(average);

//reduce to get The Longest email

const longOne = (longest, user) => {
    if (longest.email.length > user.email.length) {
        return longest;
    } else {
        return user;
    }
};

let longEmail = users.reduce(longOne, {email: ""})
console.log(longEmail)

//reduce to get a list of user's name in a single string

let nameString = users.reduce(function (prevVal, currVal, idx) {
    return idx === 0 ? currVal.name : prevVal + ', ' + currVal.name;
}, '')
console.log(`Your Instructors are ${nameString}.`);

//BONUS
let arr1 = ['java', 'scala', 'php']
let arr2 = ['javascript', 'bash']
let arr3 = ['java', 'php', 'sql']
let arr4 = ['html', 'css', 'javascript', 'php']
let arr5 = ['clojure', 'javascript', "clojure", "javascript"]

let unique = users.map(function (user){
     let uniLang  = user.languages.concat()
    console.log(uniLang)
})