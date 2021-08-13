<template>
  <h1>Trello</h1>
  <div class="list">
    <div class="board"
      v-for="(board, $boardIndex) of board.list" :key="$boardIndex" 
      @drop="moveTask($event, board.tasks)" @dragover.prevent @dragenter.prevent
    >
    <p class="board__title">{{ board.name }}</p>
      <tasks-list 
        :tasks="board.tasks"
        :boardId="$boardIndex"
        @onDragStart="onDragStart"
      />
  </div>
    <div class="board">
      <input type="text" class="board-list__input" 
        placeholder="+ добавить доску"
        v-model="newBoardName"
        @keyup.enter="addBoard"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TasksList from './components/TasksList.vue'

export default {
  name: 'App',
  components: {
    TasksList
  },
  props: {},
  data() {
    return {
      modal: false,
      newBoardName: ''
    }
  }, 
  computed: mapState(['board']),
  methods: {
    addBoard(){
      this.$store.commit('ADD_BOARD', {
        name: this.newBoardName
      })
      this.newBoardName = ''
    },
    onDragStart(data){
      data.e.dataTransfer.setData('task-index', data.taskIndex)
      data.e.dataTransfer.setData('from-board-index', data.fromBoardIndex)
    },
    moveTask(e, toTasks){
      const fromBoardIndex = e.dataTransfer.getData('from-board-index')
      const fromTasks = this.board.list[fromBoardIndex].tasks 
      const taskIndex = e.dataTransfer.getData('task-index')

      this.$store.commit('MOVE_TASK', {
        fromTasks,
        toTasks,
        taskIndex
      })
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


.board {
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 25px 20px;
  background-color: $board;
  border: $bborder;
  border-radius: 5px;
  @media (max-width: $screen-md) {
    width: 80%;
  }
  &-list {
    &__input {
      padding: 5px;
    }
  }
  &__title {
    font: bold 20px  $font;
    text-transform: uppercase;
    margin: 5px 0;
  }
}

</style>
