

// Day4


// Q1. What are objects in javascript ?

// In JavaScript, objects are data structures that store collections of key-value pairs,
//  where keys are strings (or symbols) and values can be any type, including other objects, functions, arrays, or primitive values.


const person = {
    name: "Alice",
    age: 25,
    isStudent: true,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name);
console.log(person.age);

person.greet();





// Q2.  What are function constructors ?

// A function constructor is a special type of function in JavaScript used to create and initialize objects. 
// It acts as a blueprint for creating multiple objects with similar properties and methods.
// By convention, function constructors are written with a capitalized name to distinguish them from regular functions.
// When a function is used as a constructor (with the new keyword),
// it creates a new object, sets the this context inside the function to the newly created object,
// and returns the object automatically unless another object is explicitly returned.class Person

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.introduce = function () {
            console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
        };
    }
}

const Rahul = new Person("Rahul", 20);
const Rangbaaz = new Person("Rangbaaz", 21);

console.log(Rahul.name);
console.log(Rangbaaz.age);

Rahul.introduce();
Rangbaaz.introduce();



// Q.4  Give an example of inheritance using function constructor ?

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

class Dog {
    constructor(name, sound, breed) {
        Animal.call(this, name, sound);
        this.breed = breed;
    }
    describeBreed() {
        console.log(`${this.name} is a ${this.breed}`);
    }
}

Dog.prototype = Object.create(Animal.prototype);

;


const dog1 = new Dog("Buddy", "Woof", "Golden Retriever");
const dog2 = new Dog("Max", "Bark", "Beagle");

// Using inherited method
dog1.makeSound(); // Output: Buddy says Woof
dog2.makeSound(); // Output: Max says Bark

// Using Dog-specific method
dog1.describeBreed(); // Output: Buddy is a Golden Retriever
dog2.describeBreed(); // Output: Max is a Beagle




// Q.5  What is the use of setTimeout ?

// setTimeout is a built-in JavaScript function used to execute a piece of code or a function after a specified delay (in milliseconds). 
// It is a way to schedule asynchronous execution of code.

console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds




// Q.6  What are promises and why do we need them ?

// A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.
//  It is used to handle asynchronous tasks like API calls, timers, or file reading in a more organized and manageable way than traditional callback-based approaches.


// Why Do We Need Promises?
// Asynchronous operations are common in JavaScript (e.g., fetching data from a server, reading files, or setting timers). 
// Promises provide a cleaner, more readable, and more maintainable way to deal with these tasks, especially when multiple asynchronous operations depend on each other.

const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulating success/failure

    if (success) {
        resolve("Operation succeeded!"); // Fulfilled
    } else {
        reject("Operation failed!"); // Rejected
    }
});




// Q.7  What is the purpose of async/await keywords ?

// The async and await keywords in JavaScript are used to simplify working with promises by providing a more readable,
//  synchronous-looking syntax for writing asynchronous code. They were introduced in ES2017 (ES8) and are built on top of promises.

async function fetchData() {
    const data = await fetch("https://api.example.com/data");
    console.log(data);
}

//  example of fetching data from the user

async function fetchUserData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

fetchUserData();








// Q8.  What is callback hell ?

// Callback Hell refers to a situation in JavaScript where multiple nested callbacks are used to handle asynchronous operations,
//  leading to code that is difficult to read, debug, and maintain.
//  It is also known as the Pyramid of Doom because of the triangular or deeply nested structure it creates.

// example of callback hell

getUserData((user) => {
    getPosts(user.id, (posts) => {
        getComments(posts[0].id, (comments) => {
            console.log(comments);
        });
    });
});








// Q9.  What is promise ?

// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//  It is a modern approach to handle asynchronous programming, replacing traditional callback-based patterns.

// Promises provide a cleaner, more structured way to manage asynchronous tasks and avoid issues like callback hell.

const promise = new Promise((resolve, reject) => {
    // Asynchronous code here
    if (success) {
        resolve(value); // Fulfilled state
    } else {
        reject(error);  // Rejected state
    }
});




// Q10.  What are arrow functions ?

// An arrow function is a concise way to write functions in JavaScript.
//  It uses the => syntax and is often used for shorter, more readable function expressions. 
// Arrow functions were introduced in ES6 (ECMAScript 2015).

// Basic arrow function
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5



// Q11. Give an example of async/await ?

async function fetchData() {
    try {
        // `fetch` returns a promise, so we use `await` to wait for it to resolve
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        // The response is also a promise, so we await its resolution
        const data = await response.json();

        console.log(data); // Output: { userId: 1, id: 1, title: '...', body: '...' }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();




// Q12.  What is difference between null and undefined and where to use what ?

// undefined
// Meaning: Represents a variable that has been declared but has not been assigned a value.

// null
// Meaning: Represents an intentional absence of value. It is often used to indicate that a variable has been assigned a "null" value.







// Q13.  Write code to explain map and filter in arrays ?

// map() Method
// The map() method creates a new array by transforming each element in an existing array using a provided callback function.

// map() is used to transform elements in an array by applying a callback function.

const number = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared);  // Output: [1, 4, 9, 16, 25]


// filter() Method
// The filter() method creates a new array with all elements that pass a test (i.e., meet a certain condition) defined by a provided callback function.

// filter() is used to create a new array by filtering elements based on a condition.

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4, 6]








// Q14 .  Given an array of 0's and 1's find out number of 0's ?

const array_1 = [0, 1, 0, 1, 0, 1, 0];
let count = 0;

for (let i = 0; i < array_1.length; i++) {
    if (array_1[i] === 0) {
        count++;
    }
}

console.log(count);  // Output: 4



// Given an array find out total no. of odd and even nos.

const array = [1, 2, 3, 4, 5, 6, 7, 8];
let oddCount = 0;
let evenCount = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log(`Odd Count: ${oddCount}, Even Count: ${evenCount}`);








// Q15. Given a string find out number of vowels ?

const str = "Hello World!";
let vowelCount = 0;
const vowels = "aeiouAEIOU";

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vowelCount++;
    }
}

console.log(vowelCount);  // Output: 3







// Q16.  Write a code to create two objects with 2 properties each, one will be string and other will be an array.

// Creating the first object
const obj1 = {
    name: "Rangbaaz",
    hobbies: ["reading", "traveling", "cycling"]
};

// Creating the second object
const obj2 = {
    city: "Gorakhpur",
    landmarks: ["Statue of Liberty", "Times Square", "Central Park"]
};

console.log(obj1);
console.log(obj2);





