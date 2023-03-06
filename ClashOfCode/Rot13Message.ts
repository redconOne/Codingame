const T: string = readline();

const values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let result = '';

for (const char of T)
  if (char === ' ') result += ' ';
  else result += values[(values.indexOf(char) + 13) % 26];

console.log(result);
