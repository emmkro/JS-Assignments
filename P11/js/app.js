for (let i = 0; i > 13; i++) {
  console.log(getRandomInt( 6)+ 1);
}
function getRandomInt(max) {
  return Math.floor(Math.random() *max);
}

for(let i= 1; i <=1024; i *= 2){
  console.log(i);
}
for (let i= 10; i >= 0; i--){
  console.log(i);
}

function power (firstNumber, exponent) {
    let result = firstNumber;
  for (let i = 1; i < exponent; i++) {
    result *= firstNumber;
  }
  return result;
}
console.log(power(2, 2));

for (let i = 9; i >= 0 ; i--){
  console.log(i + " green bottles on the wall" + i + " green bottles on the wall ");
}
