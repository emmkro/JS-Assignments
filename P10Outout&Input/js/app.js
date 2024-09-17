let inputNumber= 4;
function multiplyBySelf(numberToMultiply){

  return numberToMultiply * numberToMultiply;
}
console.log(multiplyBySelf(4));

function add(firstNumber, secondNumber){
  return firstNumber + secondNumber;
}
console.log(add(5, 20));

//

let Number1= 2;
let Number2= 6;
function numberToDuplicate(number){
  return (Number1 + Number2) /2;
}
//OR
console.log (numberToDuplicate (Number1+ Number2));

function avarage(firstNumber, secondNumber){
  return (firstNumber + secondNumber) /2;
}
console.log(avarage(2, 6));

//

function welcomeResult(firstname, lastname){
  return"Welcome " + firstname + " " + lastname;
}
console.log(welcomeResult("Emma", "Kronkvist"));


//

function randomNumber() {
  return Math.floor(Math.random() * Math.floor(3));
}
console.log(randomNumber());

function convertNumbersToLetters(number){
   if(number === 0){
    return "A";
  }
  else if(number === 1){
    return "B";
  }
else if (number === 2){
  return "C";
}
}
console.log (convertNumbersToLetters(0));

//
function evulateResult(firstNumber, secondNumber){

  if (firstNumber === secondNumber){
    return "Both numbers are equal!";
  }
 else if (firstNumber > secondNumber){
    return "First number i greater!";
 }
 else if (firstNumber < secondNumber){
   return"First number is smaller!";
 }

}
console.log(evulateResult (5 , 2));
