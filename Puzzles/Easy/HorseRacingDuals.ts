const N: number = parseInt(readline());
const horses = [];
for (let i = 0; i < N; i++) {
  const pi: number = parseInt(readline());
  horses.push(+pi);
}

horses.sort((a, b) => a - b);
let min = Infinity;
for (let i = 0; i < horses.length - 1; i++)
  min = Math.min(min, horses[i + 1] - horses[i]);

console.log(min);
