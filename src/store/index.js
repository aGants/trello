import { createStore } from 'vuex'
import defaultBoard from './default-board'
import { saveState } from './utils'

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default createStore({
  plugins: [ saveState ],
  state: {
    board
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
