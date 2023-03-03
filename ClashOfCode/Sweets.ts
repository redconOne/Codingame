// In mathematics exam N students passed and some others failed !
// The teacher John decided to give sweets to students .He will distribute the sweets to students who passed the exam in the order of 1 sweet for first student 3 sweets for second student 5 sweets for third student and so on ...

// the sweets are in packets. Each packet contains 10 sweets. how many packets are needed for giving sweets for students. He said that next time the failed students will study because of this !

const n: number = parseInt(readline());

let sweets = 1;
let total = 0;

for (let i = 0; i < n; i++) {
  total += sweets;
  sweets += 2;
}

console.log(Math.ceil(total / 10));
