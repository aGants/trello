export function saveState(store) {
  store.subscribe(
    (mutation, state) => {
      localStorage.setItem('board', JSON.stringify(state.board))
    }
  )
}

export function uuid() {
  return (Math.random()*1e8).toString(16)
}