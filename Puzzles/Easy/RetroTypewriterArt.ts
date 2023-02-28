const T: string = readline();

const values = {
  sp: ' ',
  bS: '\\',
  sQ: "'",
};

const regexp = /(?<amount>\d+)(?<char>.*)/;
let result = '';

for (const item of T.split(' ')) {
  if (!item.length) continue;
  if (item === 'nl') {
    result += 'nl';
    continue;
  }
  if (!/[^0-9]/.test(item)) {
    const char = item[item.length - 1];
    const amount = +item.slice(0, item.length - 1);
    result += char.repeat(amount);
    continue;
  }

  const { amount, char } = item.match(regexp)?.groups;

  if (values[char]) result += values[char].repeat(+amount);
  else result += char.repeat(+amount);
}
