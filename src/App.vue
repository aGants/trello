<template>
  <h1>Trello</h1>
  <div class="list">
    <div class="board" :class="{editboard: board.edit}"
      v-for="(board, $boardIndex) of board.list" :key="$boardIndex" 
      @drop="moveTask($event, board.tasks)" @dragover.prevent @dragenter.prevent
    >
    <div class="board-title">
      <div v-show="board.edit != true" class="board-title__text">
        <span>{{ board.name }}</span>
      </div>
      <input type="text" class="board-title__input"
        v-show="board.edit" 
        @keydown.enter="editBoard($boardIndex); board.edit=false" 
        @keydown.esc="board.edit=false; count = 0"
        v-model="editBoardName"
      >
      <div class="option" v-show="count === 0">
        <input type="button" value="..." class="option-btn edit" @click="{board.edit=true; count+=1; editBoardName = board.name}">
        <input type="button" value="x" class="option-btn close" @click="deleteBoard($boardIndex)" >
      </div>
    </div>
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
      newBoardName: '',
      editBoardName: '',
      count: 0
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
    deleteBoard(id){
      this.$store.commit('DELETE_BOARD', {
        id: id
      })
    },
    editBoard(id) {
      this.$store.commit('EDIT_BOARD', {
        id: id,
        name: this.editBoardName
      })
      this.editBoardName = '';
      this.count = 0;
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
  width: 230px;
  padding: 25px 20px;
  background-color: $board;
  border: $bborder;
  border-radius: 5px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  @media (max-width: $screen-md) {
    width: 80%;
  }
  &-list {
    &__input {
      padding: 5px;
    }
  }
  &-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font: bold 20px  $font;
    text-transform: uppercase;
    margin: 5px 0;
    white-space: normal;
    word-wrap: break-word;
    &__text {
      min-width: 0;
      width: 180px;
    }
    &__input {
      width: 100%;
      padding: 5px;
    }
  }
}

.option {
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  &-btn {
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    transition: 1s;
}

}
.close:hover {
  background: $cancel;
}
.edit:hover {
  background: $save;
  }

.editboard {
  border-color: $save;
}

</style>
