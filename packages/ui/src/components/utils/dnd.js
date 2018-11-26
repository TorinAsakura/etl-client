export const itemType = 'card'

let position = [1, 3]
let observers = []

function emitChange() {
  observers.forEach(o => o && o(position))
}

export function observe(o) {
  observers.push(o)
  emitChange()

  return () => {
    observers = observers.filter(t => t !== o)
  }
}

export function canMoveKnight(toX, toY) {
  const [x, y] = position
  const dx = toX - x
  const dy = toY - y

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}

export function move(toX, toY) {
  position = [toX, toY]
  emitChange()
}
