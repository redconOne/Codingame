const A: number = parseInt(readline());
const B: number = parseInt(readline());

let total = 0;

for (let i = A; i <= B; i++) if (Math.floor(i ** 0.5) === i ** 0.5) total++;

console.log(total);
