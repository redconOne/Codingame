var inputs: string[] = readline().split(' ');
const rb: number = parseInt(inputs[0]);
const cb: number = parseInt(inputs[1]);
var inputs: string[] = readline().split(' ');
const re: number = parseInt(inputs[0]);
const ce: number = parseInt(inputs[1]);

let bigX = Math.max(rb, re);
let smallX = Math.min(rb, re);
let bigY = Math.max(cb, ce);
let smallY = Math.min(cb, ce);

while (bigX > smallX) {
  bigX--;
  smallX++;
}

while (bigY > smallY) {
  bigY--;
  smallY++;
}

console.log(`${smallX} ${smallY}`);
