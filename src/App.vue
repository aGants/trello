<template>
  <h1>Доски</h1>
  <div class="list">
    <Board 
      v-for="board in boardList" :key="board.id" 
      class="board" :name="board.name" 
    />
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Board
  },
  data() {
    return {
      boardList: [
        {
          id: '1',
          name: 'to do'
        }, 
        {
          id: '2',
          name: 'in progress'        
        },
        {
          id: '3',
          name: 'done'        
        }
      ]
    }
  }, 
  methods: {
    addBoard () {
      this.boardList.push({name: this.newBoardname})
    }
  }
}
</script>

<style lang="scss">
#app {
  margin: 20px 15px 0;
  color: #2c3e50;
  font-family: $font;
}

.list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  @media (max-width: $screen-md) {
    flex-direction: column;
  }
}

</style>
