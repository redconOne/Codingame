const w: number = parseInt(readline());
const h: number = parseInt(readline());
const grid: string[][] = [];

for (let i = 0; i < h; i++) {
  const line: string = readline();
  grid.push(line.split(''));
}

const nearbyBombs = (xCoord: number, yCoord: number): number => {
  const nearby: string[] = [];
  const north = yCoord > 0;
  const south = yCoord < grid.length - 1;
  const west = xCoord > 0;
  const east = xCoord < grid[0].length - 1;
  const northWest = north && west;
  const northEast = north && east;
  const southWest = south && west;
  const southEast = south && east;

  if (north) nearby.push(grid[yCoord - 1][xCoord]);
  if (northEast) nearby.push(grid[yCoord - 1][xCoord + 1]);
  if (east) nearby.push(grid[yCoord][xCoord + 1]);
  if (southEast) nearby.push(grid[yCoord + 1][xCoord + 1]);
  if (south) nearby.push(grid[yCoord + 1][xCoord]);
  if (southWest) nearby.push(grid[yCoord + 1][xCoord - 1]);
  if (west) nearby.push(grid[yCoord][xCoord - 1]);
  if (northWest) nearby.push(grid[yCoord - 1][xCoord - 1]);

  const totalBombs = nearby.filter((square) => square === 'x').length;
  return totalBombs;
};

const solution = (): string => {
  const result: string[][] = [];

  for (const yCoord in grid) {
    const line: string[] = [];

    for (const xCoord in grid[yCoord]) {
      if (grid[yCoord][xCoord] === 'x') {
        line.push('.');
        continue;
      }

      const totalNearby = nearbyBombs(+xCoord, +yCoord);
      line.push(totalNearby ? totalNearby.toString() : '.');
    }

    result.push(line);
  }

  return result.map((line) => line.join('')).join('\n');
};

console.log(solution());
