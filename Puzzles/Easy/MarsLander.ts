const surfaceN: number = parseInt(readline());

for (let i = 0; i < surfaceN; i++) {
  const inputs: string[] = readline().split(' ');
  const landX: number = parseInt(inputs[0]);
  const landY: number = parseInt(inputs[1]);
}

while (true) {
  const inputs: string[] = readline().split();
  const X: number = parseInt(inputs[0]);
  const Y: number = parseInt(inputs[1]);
  const hSpeed: number = parseInt(inputs[2]);
  const vSpeed: number = parseInt(inputs[3]);
  const fuel: number = parseInt(inputs[4]);
  const rotate: number = parseInt(inputs[5]);
  const power: number = parseInt(inputs[6]);

  console.log(`0 ${Y < 2250 ? 4 : 0}`);
}
