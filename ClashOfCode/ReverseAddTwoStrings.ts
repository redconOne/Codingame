const s1: string = readline();
const s2: string = readline();

const arr1 = s1.split(' ');
const arr2 = s2.split(' ');
const result: number[] = [];

if (arr1.length !== arr2.length) console.log('Invalid');
else {
  for (let i = 0; i < arr1.length; i++) result.push(+arr1[i] + +arr2[i]);

  console.log(result.join(' '));
}
