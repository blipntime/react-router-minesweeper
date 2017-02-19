/*
 * action types
 */
export const CLICK_CELL = 'CLICK_CELL'
export const RESTART = 'RESTART'
export const VALIDATE = 'VALIDATE'

export function clickCell(cell) {
  return { type: CLICK_CELL, cell }
}

export function restart() {
  return { type: RESTART }
}

export function validate() {
  return { type: VALIDATE }
}