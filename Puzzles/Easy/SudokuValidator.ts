const grid: number[][] = [];
let gogo = true;

for (let i = 0; i < 9; i++) {
  var inputs: string[] = readline().split(' ');
  const row: number[] = [];
  for (let j = 0; j < 9; j++) {
    const n: number = parseInt(inputs[j]);
    row.push(n);
  }
  grid.push(row);
}

const unique = (arr) => {
  for (const num of arr)
    if (arr.indexOf(num) !== arr.lastIndexOf(num)) return false;
  return true;
};

const checkRows = () => {
  for (const row of grid) if (!unique(row)) return false;
  return true;
};

const checkCols = () => {
  for (let i = 0; i < grid.length; i++) {
    const col: number[] = [];

    for (let j = 0; j < grid.length; j++) col.push(grid[j][i]);

    if (!unique(col)) return false;
  }

  return true;
};

const checkSubGrids = () => {
  for (let i = 0; i < grid.length; i += 3) {
    let grid1: number[] = [];
    let grid2: number[] = [];
    let grid3: number[] = [];

    for (let j = 0; j < 3; j++) {
      grid1 = grid1.concat(grid[i + j].slice(0, 3));
      grid2 = grid2.concat(grid[i + j].slice(3, 6));
      grid3 = grid3.concat(grid[i + j].slice(7));
    }

    if (!unique(grid1) || !unique(grid2) || !unique(grid3)) return false;
  }

  return true;
};

console.log(checkRows() && checkCols() && checkSubGrids());
