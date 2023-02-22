const inputs = readline().split(' ');
const lightX = parseInt(inputs[0]);
const lightY = parseInt(inputs[1]);
const initialTx = parseInt(inputs[2]);
const initialTy = parseInt(inputs[3]);
const diff = { x: lightX - initialTx, y: lightY - initialTy };

while (true) {
  const remainingTurns = parseInt(readline());

  const x = diff.x;
  const y = diff.y;
  let output = '';

  if (y < 0) {
    output += 'N';
    diff.y++;
  }
  if (y > 0) {
    output += 'S';
    diff.y--;
  }
  if (x < 0) {
    output += 'W';
    diff.x++;
  }
  if (x > 0) {
    output += 'E';
    diff.x--;
  }

  console.log(output);
}
