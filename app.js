// DRY - Dont Repeat Yourself;

// let count =1;

// while (count < 3 ) {
//     console.log('hello');
//     count = count + 1;
// }


// while (count <= 100) {
//     console.log(count);
//     count = count + 1;
// }
// Print the no. 1 - 100



// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} Frontend Simplified`);
//     } else if (i % 3 === 0) {
//         console.log(`${i} Frontend`);
//     } else if (i % 5 === 0) {
//         console.log(`${i} Simplified`);
//     }  else {
//         console.log(i);
//     }
// }


/*

Print out every character from the string: "Frontend Simplified"

*/

// const text = "Frontend Simplified";

// for (let i = 0; i < text.length; i++) {
//     console.log(text[i]); 
// }


//function definition
// function welcomePersonToFES (name, last){
// console.log(`Welcome to FES ${name} ${last}`);
// }



//call the function 
// welcomePersonToFES('Pau', `Mnc`);
// welcomePersonToFES('Pau', `Mnc`);
// welcomePersonToFES('Pau', `Mnc`);

// function sumOfTwoNumbers(num1, num2) {
//     return num1 + num2;
// }

// console.log(sumOfTwoNumbers(10, 20));

// function temperature (celsius) {
//     return (celsius * 1.8) + 32;
// }

// console.log(temperature(0));
// console.log(temperature(10));
// console.log(temperature(30));

// arrow function for temperature

// const temperature = (celsius) => celsius * 1.8 + 32;

// let arr = [10, 20, 40, 90, 80, 100];

// let newArr = arr.filter(element => element < 50)

// console.log(newArr);

// let grades = ['A+', 'A', 'FAIL'];

// // let grades = ['B', 'FAIL', 'FAIL'];

// // let grades = [ 'FAIL', 'FAIL'];

// // Create a mew empty array called 'goodGrades'

// let goodGrades = [];

// for (let i = 0; i < grades.length; i++) {
// // add the current element onto ' goodGrades' only if the current element is not equal to 'FAIL
//     if (grades[i] !== 'FAIL') {
//         goodGrades.push(grades[i])
//         // console.log(grades[i]);
//     }
// }

// console.log(goodGrades)

// let arr = [1,5,7,8,23];


// when to use map, it's when you want to change the value of your variable
// the map will iterate to your element and it will change the value based on your return

// let newArr = arr.map(elem => {
//     console.log(elem)
//     return undefined;
// })

// console.log(newArr)


// let dollars = [1, 5, 10, 3];

// let newDollars = dollars.map( elem => elem * 100);


//create new 'cents' array
//loop over every element in dollars
// multiply the element by 100
// add this element onto 'cents' array

// let cents = [];
// // solving using a for loop
// for (let i = 0; i < dollars.length; i++) {
// cents.push(dollars[i] * 100);
// }

// console.log(cents)


// let user = [{
//     username: 'hello',
//     email: 'hellopanda@yahoo.com',
//     password: '7890124jjdiwe',
//     subscriptionStatus: 'VIP',
//     discordID: 'Hello Panda#01231',
//     lessonsCompleted: [1,2,4],
// },
// {
//     username: 'chicken',
//     email: 'friedchicken@yahoo.com',
//     password: '12390ndkqwedf',
//     subscriptionStatus: 'VIP',
//     discordID: 'Fried Chicken#00001',
// //     lessonsCompleted: [0,1],
// }]

// checking if the email and password entered is the same in the database of array of obj
//looping over the elem in the obj if the entered details are match with it.
// function login (email, password) {
//     for (let i = 0; i < user.length; i++){
//         if (user[i].email === email) {
//             console.log(user[i]);
//             if(user[i].password === password) {
//                 console.log('the password is correct');
//             } else {
//             console.log('wrong password and try again');
//             }
//             return; // to stop the loop when it matches with the obj element
//         }
//     }
//     console.log(`couldn't find a match`);
// }

// login('hellopanda@yahoo.com', '7890vyutiwe')

// console.log(user[0].lessonsCompleted.map( elem => elem * 2))
// console.log(user.email);
// console.log(user.subscriptionStatus);

// to change the array inside the lessonsCompleted element in the object
// console.log(user.lessonsCompleted.map(elem => elem * 2))

// let users = [
//     {
//         username: 'abelcruz',
//         email: 'abelcruz@gmail.com',
//         password: 'abel123',
//         subscriptionStatus: 'VIP',
//         discordID: 'Abel Cruz#0012',
//         lessonsCompleted: [1,2,3],
//     }
//     ,{
//         username: 'bobbiereyes',
//         email: 'bobbiereyes@gmail.com',
//         password: 'bobbie123',
//         subscriptionStatus: 'VIP+',
//         discordID: 'Bobbie Reyes#1232',
//         lessonsCompleted: [6,2,1],
//     },
//     {
//         username: 'charliegonzales',
//         email: 'charliegonzales@gmail.com',
//         password: 'charlie123',
//         subscriptionStatus: 'VIP',
//         discordID: 'Charlie Gonzales',
//         lessonsCompleted: [0,1, 3],

//     },
// ]

// // cleaner approach

// function register (user) {
//     // console.log(username,  email, password, subscriptionStatus, discordID, lessonsCompleted);
//     return users.push(user);    
// }


// console.log(register({username: 'abelcruz',
//     email: 'abelcruz@gmail.com',
//     password: 'abel123',
//     subscriptionStatus: 'VIP',
//     discordID: 'Abel Cruz#0012', 
//     lessonsCompleted: [1,2,3]
// }
//     ))

// console.log(users);

// accessing element in html

//  const name = document.querySelector('h1');

//  // second way
//  // document.getElementById('name');
//  console.log(name)

//changing the content in the html
// document.querySelector('h1').innerHTML = 'hello';

// Change CSS

// function toggleDarkMode () {
//     document.querySelector('body').classList.toggle('dark-theme');
// }


// // 1. add no.
// const addition = (num1, num2) => num1 + num2;
// console.log(addition(2,4));

// // 2. convert hours to sec
// let convertHoursToSec = hour => hour * 3600;

// console.log(convertHoursToSec(2))

// //3. CALCULATE THE PERIMETER OF A RECTANGLE 2l + 2w
// let calcPerimeter = (length, width) => (2 * length) + (2 * width);

// console.log(calcPerimeter(6, 7))

// // 4  Calculate area of a triangle 1/2 bh
// let triangleArea = (base, height) => (0.5 * base * height);

// console.log(triangleArea(20,20))

// //5. extend a string - adds "frontend" at the end of the string

// let appendGreat = (word) => word + " Great";

// console.log(appendGreat("apple"))
//     // if you're dealing with numbers add + on your parameter to perform the method inside the function
//     // making sure you're converting into a number add + to it (+num)
//     // let appendGreat = (word) => 2 + (+number);

// // 6 give two numbers if the sum is greater than 100 return true

// let sumGreaterThan100 = (x, y) => (x + y) >= 100;

// console.log(sumGreaterThan100(10, 10));

// //7 return a true if the number <= 0, otherwise false

// let lessThanZero = (num) => num <= 0;

// console.log(lessThanZero(3));

// // 8 given  a boolean return the opposite

// let oppositeBoolean = (boo) => !boo;

// console.log(oppositeBoolean(true))
// console.log(oppositeBoolean(false))

// // 9 given any element return true if it is not the number 0

// let isNotZero = elem => elem !== 0;
// console.log(isNotZero(null))

// // 10. return the remainder of 2 parameter

// let remainder = (elemA, elemB) => elemA % elemB;

// console.log(remainder(7, 8));

// // 11. return true if its an odd number

// let oddNumber = odd => odd % 2 === 1;
// console.log(oddNumber(9))

// // 12. return 1 if its even otherwise return -1

// let evenNumber = even => even % 2 === 0 ? 1 : -1;

// console.log(evenNumber(2));

// // 13. check if the user is looged in and subscribed

// let isLoggedInAndSubscribed = (log, sub) => log === "LOGGED_IN" && sub === "SUBSCRIBED";

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));


// Medium Challenges

// // 1 Falsy or Truthy if the first one is falsy return it otherwise return the second parameter

// // !!true - fasy value but since the first statement needs to be true we use !true

// let truthyOrFalsy = (elem1, elem2) => !elem1 ? elem1 : elem2;

// console.log(truthyOrFalsy(0, 500))

// // 2 Return the length of any given array

// //last element arr[arr.length - 1]

// let lengthArr = arr => arr.length;
// console.log(lengthArr([1,2,3,52,2354,5234]))

// //3 find the sum of an array

// function sumOfArr (sum) {
// let newArr = 0;   
// // for (let x = 0; x < sum.length; x++)
//     for (let x of sum) {
//         newArr += x;
//     }
// return newArr;
// }

// console.log(sumOfArr([1,2,3,4,5,23,5]));

// //4 add up the numbers from a single number

// function progressiveSum (num) {
// let newNum = 0;

// for (let i = 1; i <= num; i++) {
//     newNum += i;
// }

// return newNum;
// }

// console.log(progressiveSum(6));

// // Calculate the time - give a number in seconds return this number in mm:ss format

// function calcTime (seconds) {
// let newSec = seconds % 60;
// let min = Math.floor(seconds /60);
// return  min < 10 || newSec < 10 ? '0' + min + ':' + '0' + newSec : min + ':' + newSec;
// }


// console.log(calcTime(530));

// // find the largest number given an array, return the largest number

// function getMax (max) {
// let newNum = max[0];
// // shortcut of for (let i = 0; i < max.length; i++)
// for (let num of max) {
//     if (num > newNum) {
//         newNum = num;
//     } 
// }
// return newNum
// }

// console.log(getMax([5, 100, -240]))

// // reverse a string given a string and return a reverse

// //  for loop method
// /*
// function reverseString(str) {
//     let reversedString = '';
//     for (let i = 0; i < str.length; i++) {
//         //This is how to loop through every character in a string
//         reversed String = str[i] + reversedString
//     }
// }

// // decremeting loop
// for (let i = str.length; i >= 0; i--) {
//     reversedString += str[i]
// }
// */
// // function reverseString (string) {    return string.split('').reverse().join('') }

// let reverseString = string => string.split('').reverse().join('');

// console.log(reverseString('abcdefghijklmn'));

// // turn every element in an array into 0

// // other method: return new Array(arr.length).fill(0)

// // memorize map, filter, reduce & for each method!
// // other method: return arr.map(elem => 0) converts everything into a new array 

// function convertToXZero (arrays) {
//     let newArr = [];
//     for (let arr of arrays) {
//         arr = 0;
//         newArr.push(arr);
//     }
// return newArr;
// }

// console.log(convertToXZero([4, 3, 5, 2, 3, 4,]))

// // filterout some apples

// function removeApples (apple) {
//     return apple.filter(elem => elem !== 'apple');

//     /*
//         other method
//         let newArr = []
//         for(let i = 0; i < arr.length; i++) {
//             if (arr[i] !== 'apple') {
//                 newArr.push(arr[i]);
//             }
//         }
//         return newArr
//     */ 
// }

// console.log(removeApples(['Banana', 'apple', 'tomato']));

// // filter out all the falsy values

// function filterOutFalsy(falsy) {
//     return falsy.filter(elem => !!elem);
// }

// /*
// let newArr = [];
// for (let i = 0; i < arr.length' i++) {
//     if (!!arr[i]) {
//         newArr.push(arr[i])
//     }
// }
// return newArr

// */
// console.log(filterOutFalsy(['tomato', 0, false, 'banana', 1, [], null]));

// // truty to true and falsy to false

// function convertToBoolean (array) {
//     return array.map( elem => !!elem ? true : false);
// }

// console.log(convertToBoolean([500, null, [], false, "", {}]))



// Hard Challenges

// // show rating display a (*) for every full rating and a full-stop (.) for half rating

// function showRating (rating) {
//     let ratings = "";

//     for (let i = 0; i < Math.floor(rating); i++) {
//         ratings += '*';
//         // math.floor to round of to a whole no.
//         if (i !== Math.floor(rating) -1) {
//             ratings += " ";
//         }
//     }

//     //check if it's not an integer
//     if(!Number.isInteger(rating)) {
//         ratings += ' .'
//     }
//     return ratings;

// }

// console.log(showRating(9.5))


// //Sort by lowaest to highest price
// // given an array of numbers, return the prices sorted by low to high


// function sortLowToHigh (sortarr) {
//     // shortcut
//     // sortarr.sort((a,b) => a - b);

//     return sortarr.sort((a,b) => a - b);;
// }
// console.log(sortLowToHigh([20, 90, 50, 60, 10, -1]))


// // Sort by highest to lowest price

// function sortHighToLow (highLow) {
//     // need the property you want to sort
//     return highLow.sort((a,b) => a.price - b.price);
// }


// console.log(sortHighToLow([
// {id: 1, price: 50},
// {id: 2, price: 30},
// {id: 3, price: 60},
// {id: 4, price: 10},
// ]));

// // Promises - extremely important!!


// //Find all the posts by a single user

// async function postsByUser (userID) {
//     const result = await fetch('https://jsonplaceholder.typicode.com/posts');

//     //convert the API to frontend to json
//     const res = await result.json();

//     const posts = res.filter(element => element.userId === userID);
//     console.log(posts)
// }


// postsByUser(4)

// // first 6 incomplete todos

// async function firstSixIncomplete (todos) {
//     const todoList = await fetch('https://jsonplaceholder.typicode.com/todos');
//     const todoConvert = await todoList.json();
//     console.log(todoConvert)
//     const complete = todoConvert.filter(element => !element.completed).slice(0, 6);
    
//     console.log(complete)
// }

// firstSixIncomplete(6);