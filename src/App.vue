<template>
  <h1>Trello</h1>
  <div class="list">
    <Board 
      v-for="board in board.list" :key="board.id" 
      class="board" :board="board" 
    >
    text
    </Board>
    <div class="board">
      <input type="text" class="board-list__input" 
        placeholder="+ добавить доску"
        @keyup.enter="addBoard"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Board
  },
  props: {},
  data() {
    return {
      modal: false,
      newName: ''
    }
  }, 
  computed: mapState(['board']),
  methods: {
    addBoard (name) {
      console.log(name)
      // this.boardList.push({name: name, tasks: []})
    }
  }
}
</script>

<style lang="scss">
#app {
  margin: 50px 15px 0;
  color: #2c3e50;
  font-family: $font;
}

.list {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: $screen-md) {
    flex-direction: column;
  }
}

.board-list {
  &__input {
    padding: 5px;
  }
}

</style>
