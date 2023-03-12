const numberToWord = (number) => {
  const uniques = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) return uniques[number];
  if (number % 10 === 0) return tens[number / 10];
  return `${tens[Math.floor(number / 10)]}-${uniques[number % 10]}`;
};

const test = 11;

console.log(numberToWord(test));
