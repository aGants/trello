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
    ADD_BOARD (state, { name }) {
      state.board.list.push({
        name,
        tasks: []
      })
    },
    DELETE_BOARD (state, { id }) {
      state.board.list.splice(id, 1)
    },
    ADD_TASK (state, { tasks, name, desc }) {
      tasks.push({
        id: uuid(),
        name,
        desc,
      })
    },
    DELETE_TASK (state, { tasks, id }) {
      tasks.splice(id, 1)
    },
    MOVE_TASK (state, { fromTasks, toTasks, taskIndex }) {
      const taskToDrag = fromTasks.splice(taskIndex, 1)[0]
      toTasks.push(taskToDrag)
    }
  },
  actions: {
  },
  modules: {
  }
})
