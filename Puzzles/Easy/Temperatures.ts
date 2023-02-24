const n: number = parseInt(readline()); // temps to analyze
var inputs: string[] = readline().split(' '); // temps array
let min = -Infinity; // holds the value closest to zero

for (let i = 0; i < n; i++) {
  const t: number = parseInt(inputs[i]); // current temp

  if (Math.abs(t) < Math.abs(min)) min = t;
  if (Math.abs(t) === Math.abs(min)) min = Math.min(t, min);
}

console.log(n ? min : '0');
