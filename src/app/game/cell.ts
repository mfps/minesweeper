export class Cell {
  status: 'open' | 'mine' | 'clear' | 'flag' = 'open';
  mine = false;
  poroximityMines = 0;

  constructor(public row: number, public column: number) {}
}
