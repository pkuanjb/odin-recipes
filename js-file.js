 // Your JavaScript goes here!
 function add7(num) {
    return num + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(string) {
    return string.toUpperCase()
}

function lastletter(string) {
    let l = string.length;
    return string[l-1];
}
console.log("Result of add7(1) is " + add7(1))
console.log("Result of multiply(2,5) is " + multiply(2,5))
console.log("Result of capitalize('miwako') is " + capitalize("miwako"))
console.log("Result of lastletter('happy') is " + lastletter("happy"))

// let inNum = parseInt(prompt("Please enter a number"))

// for(let i = 1; i<=inNum;i++){
    
//     if( i % 3 === 0 ){
//         if( i % 5 === 0) {
//             console.log("FizzBuzz")
//         } else {
//             console.log("Fizz")
//         }
//     } else {
//         if( i % 5 === 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i)
//         }
//     }
// }
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});