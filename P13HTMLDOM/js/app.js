const textField = document.getElementById("text0");

textField.innerHTML = evulateResult (5, 3);

//reference "header5" and assign it to the variable called "headerText5"
const headerText5= document.getElementById("header5");

//Take headertext5 and change it to "THIS IS MA WEBSITE"
headerText5.innerHTML= "THIS IS MA WEBSITE";

// take headertext5, access its style, access its color & change
headerText5.style.color = "white";

headerText5.style.backgroundColor = "pink";

textField.style.color = "pink";

function multiplyBySelf(numberToMultiply){
  return numberToMultiply * numberToMultiply;
}
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


