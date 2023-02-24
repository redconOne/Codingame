while (true) {
  let max = -Infinity;
  let loc = -Infinity;
  for (let i = 0; i < 8; i++) {
    const mountainH = parseInt(readline());
    if (mountainH < max) continue;
    max = mountainH;
    loc = 1;
  }

  console.log(loc);
}
