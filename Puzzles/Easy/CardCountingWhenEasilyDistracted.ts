const streamOfConsciousness: string = readline();
const bustThreshold: number = parseInt(readline());
let cards = '23456789TJQKA'.repeat(4);
const values = {
  A: 1,
  K: 10,
  Q: 10,
  J: 10,
  T: 10,
  '9': 9,
  '8': 8,
  '7': 7,
  '6': 6,
  '5': 5,
  '4': 4,
  '3': 3,
  '2': 2,
};

for (const hand of streamOfConsciousness.split('.')) {
  const notCards = /[^23456789TJQKA]/.test(hand);
  if (notCards) continue;
  for (const card of hand) cards = cards.replace(card, '');
}

const remainingCards = cards.split('').map((card) => values[card]);
const winningCards = remainingCards.filter((card) => card < bustThreshold);
const percent = (winningCards.length / remainingCards.length) * 100;

console.log(`${Math.round(percent)}%`);
