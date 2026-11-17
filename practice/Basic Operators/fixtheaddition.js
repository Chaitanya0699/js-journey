//Here’s a code that asks the user for two numbers and shows their sum.

//It works incorrectly. The output in the example below is 12 (for default prompt values).

//Why? Fix it. The result should be 3.


let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

//after a long thinking i got a idea of 
alert(+a + +b) ; //3
alert(Number(a) + Number(b)); //3