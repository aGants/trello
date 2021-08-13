import { createStore } from 'vuex'
import defaultBoard from './default-board'
import { saveState, uuid } from './utils'

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default createStore({
  plugins: [ saveState ],
  state: {
    board
  },
  mutations: {
    ADD_TASK (state, { tasks, name, desc }) {
      tasks.push({
        id: uuid(),
        name,
        desc,
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
