const grid: string[] = [];
const n: number = parseInt(readline());

for (let i = 0; i < n; i++) {
  const line: string = readline();
  grid.push(line);
}

const launcherPosition = grid.pop()?.indexOf('^');
const aircraftPositions: number[] = [];
let height = grid.length;

for (const line of grid) {
  let current = line;

  while (current.includes('>')) {
    const aircraftPosition = current.indexOf('>');
    const distFromLauncher = Math.abs(launcherPosition - aircraftPosition);
    aircraftPositions.push(distFromLauncher - height);
    current = current.replace('>', '.');
  }

  while (current.includes('<')) {
    const aircraftPosition = current.indexOf('<');
    const distFromLauncher = Math.abs(launcherPosition - aircraftPosition);
    aircraftPositions.push(distFromLauncher - height);
    current = current.replace('<', '.');
  }

  height--;
}

const instructions = new Array(Math.max(...aircraftPositions) - 1).fill('WAIT');

for (const plane of aircraft) instructions[plane - 1] = 'SHOOT';

for (const action of instructions) console.log(action);
