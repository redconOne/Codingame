const LON: string = readline();
const LAT: string = readline();
const N: number = parseInt(readline());
const distances = new Map<number, string[]>();

for (let i = 0; i < N; i++) {
  const DEFIB: string = readline();
  const regexp =
    /(?<num>\d+);(?<name>.*);(?<addr>.*);(?<phone>.*);(?<long>.*);(?<lati>.*)/;
  const { num, name, addr, phone, long, lati } = DEFIB.match(regexp)?.groups;
  const longNum = +long.replace(',', '.');
  const latiNum = +lati.replace(',', '.');
  const x =
    (longNum - +LON.replace(',', '.')) *
    Math.cos((+LAT.replace(',', '.') + latiNum) / 2);
  const y = latiNum - +LAT.replace(',', '.');
  const dist = Math.sqrt(x * x + y * y) * 6371;

  if (distances.has(dist)) distances.get(dist)?.push(name);
  else distances.set(dist, [name]);
}

const distArr = distances.keys();
const min = Math.min(...distArr);
const closest = distances.get(min);

console.log(closest ? closest[0] : '');
