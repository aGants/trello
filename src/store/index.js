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
        tasks: [],
        edit: false
      })
    },
    DELETE_BOARD (state, { id }) {
      state.board.list.splice(id, 1)
    },
    EDIT_BOARD (state, { id, name}) {
      state.board.list[id].name = name
      state.board.list[id].edit = false
    },
    ADD_TASK (state, { tasks, name, desc }) {
      tasks.push({
        id: uuid(),
        name,
        desc,
        edit: false
      })
    },
    DELETE_TASK (state, { tasks, id }) {
      tasks.splice(id, 1)
    },
    EDIT_TASK (state, {tasks, id, name, desc}) {
      tasks[id].name = name;
      tasks[id].desc = desc;
      tasks[id].edit = false;
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
