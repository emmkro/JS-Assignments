
TurnAround();
walkThreesteps();
turnLeft();
walkThreesteps();
turnRight();
stepForward();
TurnAround();
stepForward();

function stepForward() {
  console.log("Move Forward");
}
function turnRight(){
  console.log("turn Right");
}
function turnLeft(){
  turnRight();
  turnRight();
  turnRight();
}
function walkThreesteps(){
  stepForward();
  stepForward();
  stepForward();
}
function TurnAround(){
  turnRight();
  turnLeft();
}


