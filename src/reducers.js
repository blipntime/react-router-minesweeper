
import { CLICK_CELL, RESTART, VALIDATE } from './actions'

const initModel = () => {
    let cells = [];

    for(let idx=0; idx<64; idx++) {
      cells.push({col: idx % 8, row: Math.floor(idx/8)});
    }
    // ramdomly pick 10 cells for mines
    var mineIndices = new Set();
    while (mineIndices.size < 10) {
      mineIndices.add(Math.floor(Math.random()*64));
    }
    mineIndices.forEach(idx => cells[idx].hasMine = true);

    let rows = [];
    while(cells.length) {
      rows.push(cells.splice(0, 8));
    }

    return { rows };
}

const checkCol = (col, row, rows) => {
    let ret = [];
    if(row>0) {
      ret.push(rows[row-1][col]);
    }
    ret.push(rows[row][col]);
    if(row+1 < 8) {
      ret.push(rows[row+1][col]);
    }
    return ret;
  }

const markAdjacent = (cell, rows) => {
    let { row , col } = cell;
    let adjacent = [];
    if (col>0) {
      adjacent.push(...checkCol(col-1, row, rows));
    }
    adjacent.push(...checkCol(col, row, rows));
    if (col+1 < 8) {
      adjacent.push(...checkCol(col+1, row, rows));
    }
    let mineCnt = adjacent.reduce( (s, c) => s += (c.hasMine ? 1 : 0), 0);
    if (mineCnt === 0) {
      adjacent.forEach(c => c.isClicked = true);
    } else {
      cell.adjacentMineCnt = mineCnt;
    }
  }

function cells(state = initModel(), action) {
  let rows;
  switch (action.type) {
    case CLICK_CELL:
      console.log('CLICK_CELL reducer');
      let cell = action.cell;
      rows = state.rows;
      // do not accept more clicks when the game is over
      if (!state.isGameOver) {
        let isGameOver;
        if (!cell.isClicked) {
          cell.isClicked = true;
          if (cell.hasMine) {
            isGameOver = 'You lost!';
          } else {
            markAdjacent(cell, rows);
          }
          return {rows: rows, isGameOver};
        }
      }
      return state;

    case RESTART:
      return initModel();

    case VALIDATE:
      const flatten = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
      rows = state.rows;
      let flat = flatten(rows);
      if (flat.reduce( (sum, c) => sum += (c.isClicked ? 1 : 0), 0) === 54) {
        return { rows: rows, isGameOver: 'You won!' };
      } else {
        flat.forEach(cell => cell.isClicked = true);
        return { rows: rows, isGameOver: 'You lost!' };
      }

    default:
      console.log('default reducer ', state);
      return state
  }
}


export default cells