const birthyear= 2010;
const currentYear= 2024;
let ageOfPerson= currentYear - birthyear;
console.log (ageOfPerson);

let isChild= (ageOfPerson >= 0) && (ageOfPerson <=10);
let isTeenager= (ageOfPerson >= 11) && (ageOfPerson<= 17);
let isAdult= ageOfPerson >= 18;

console.log (isChild);
console.log(isTeenager);
console.log(isAdult);

let playerTouchGround = false;
let playerHasJetPack= true;

if (playerTouchGround){
  console.log("player is on the ground.");
console.log("Player can jump");
}

else if (playerHasJetPack) {
  console.log("Player can jet away!")
   }

else{
  console.log("Player is NOT on the ground!");
  console.log("player CANNOT jup!");
}


