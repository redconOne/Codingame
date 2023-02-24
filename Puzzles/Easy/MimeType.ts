const N = parseInt(readline());
const Q = parseInt(readline());
const extToMt: { [key: string]: string } = {};

for (let i = 0; i < N; i++) {
  var inputs = readline().split(' ');
  const EXT = inputs[0].toLowerCase();
  const MT = inputs[1];
  extToMt[EXT] = MT;
}

for (let i = 0; i < Q; i++) {
  const FNAME = readline();
  const FEXT = FNAME.split('.').pop().toLowerCase();
  console.log(FNAME.includes('.') ? extToMt[FEXT] || 'UNKNOWN' : 'UNKNOWN');
}
