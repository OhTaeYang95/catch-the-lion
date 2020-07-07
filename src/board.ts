import { Piece } from './piece';
export interface Position {
  row: number;
  col: number;
}

export interface Piece {
  render: any;
}

export class Cell {
  private isActive = false;
  readonly _el: HTMLElement = document.createElement('DIV');

  constructor(public readonly position: Position, private piece: Piece) {
    this._el.classList.add('cell');
  }

  put(Piece: Piece) {
    this.piece = this.piece;
  }

  getPiece() {
    return this.piece;
  }

  active() {
    this.isActive = true;
  }

  deactive() {
    this.isActive = false;
  }

  render() {
    if (this.isActive) {
      this._el.classList.add('active');
    } else {
      this._el.classList.remove('active');
    }

    this._el.innerHTML = this.piece ? this.piece.render() : '';
  }
}

export class Board {
  cells: Cell[] = [];
}
