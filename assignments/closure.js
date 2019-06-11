// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let name = 'Eric';

function myName() {
    return name;
}
myName();
console.log(myName());
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (count = 0) => {
    // Return a function that when invoked increments and returns a counter variable.
    let num = count;
    return function counter() {
        num = num + 1;
        console.log(num);
        return num;
    }
};
const newCounter = counter();
// Example usage: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let number = 0;
    console.log(number);
    let increment = () => number = number + 1;
    let decrement = () => number = number - 1;
    let newNumber = {
        increment,
        decrement
    };
    return newNumber;

};
let factory = counterFactory();
console.log(factory.decrement());
console.log(factory.increment());
console.log(factory.increment());
