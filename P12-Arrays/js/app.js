
let randomNumberCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

randomNumberCount[0] += 1;

for (let i = 0; i < 100; i++) {
  console.log (getRandomInt (10));
}

function getRandomInt( max) {
  return Math.floor(Math.random() * max );
}

