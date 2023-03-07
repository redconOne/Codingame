const operation: string = readline();
const pseudoRandomNumber: number = parseInt(readline());
const rotors: string[] = [];
for (let i = 0; i < 3; i++) rotors.push(readline());
const message: string = readline();
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let acc = 0;

const applyRotor = (msg: string, rotor: string, comparison: string): string => {
  let result = '';

  for (const char of msg) result += rotor[comparison.indexOf(char)];

  return result;
};

const encode = (msg: string): string => {
  let current = '';

  for (const char of msg) {
    const start = alpha.indexOf(char);
    const end = start + acc + pseudoRandomNumber;
    current = alpha[end % 26];
    acc++;
  }

  current = applyRotor(current, rotors[0], alpha);
  current = applyRotor(current, rotors[1], alpha);
  current = applyRotor(current, rotors[2], alpha);

  return current;
};

const decode = (msg: string): string => {
  let current = msg;

  current = applyRotor(current, alpha, rotors[2]);
  current = applyRotor(current, alpha, rotors[1]);
  current = applyRotor(current, alpha, rotors[0]);

  let result = '';

  for (const char of current) {
    const start = alpha.indexOf(char);
    const end = start - acc - pseudoRandomNumber + 26;
    result += alpha[end % 26];
    acc++;
  }

  return result;
};

console.log(operation === 'ENCODE' ? encode(message) : decode(message));
