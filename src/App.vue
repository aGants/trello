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
          id: 1,
          name: 'to do'
        }, 
        {
          id: 2,
          name: 'in progress'        
        },
        {
          id: 3,
          name: 'done'        
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$screen-md: 768px;

$bgcolor: #fff;
$board: #fbfbfb;
$bborder: 1px solid #ddd;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 20px 5px 0;
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

.board {
  width: 200px;
  padding: 0 25px;
  background-color: $board;
  border: $bborder;
  @media (max-width: $screen-md) {
    width: 80%;
  }

}
</style>
