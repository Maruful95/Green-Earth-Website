# Questions & answers

## 1) What is the difference between var, let, and const?
Answer:<br/>
**var** - It is for using inside a function. Not safe for loops and in can be reassigned.<br/>
**let** - It can be used everywhere and it can be reassigned.<br/>
**const** - It can be used everywhere and it cannot be reassigned.


## 2) What is the difference between map(), forEach(), and filter()?
Answer:<br/>
**map()** - Modifies each element of an array using a function and returns a new array.<br/>
**forEach()** - Modifies each element of an array using a function but it does not returns.<br/>
**filter()** - Checks all elements of an array and returns an array of the elements which meet the given condition.


## 3) What are arrow functions in ES6?

Answer:<br/>
Arrow functions are shorter syntax of functions. It does not need the function keyword and it returns implicitly.<br/> 
Example: const add=(a,b) => a+b;


## 4) How does destructuring assignment work in ES6?

Answer:<br/>
Destructuring is used to separates the values of array or object. It allows the values of arrays and objects assigned to separate variables.<br/>
Example: const [a,b]=[1,2]; Here, a=1 and b=2 


## 5) Explain template literals in ES6. How are they different from string concatenation?

Answer:<br/>
Template literal is the way to create or modify string using backticks (``).<br/> 
It uses ${} syntax instead of + like string concatenation. It supports multiline string unlike string concatenation which needs \n for every new line. 