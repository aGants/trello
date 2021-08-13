<template>
  <ul class="board-list">
    <li 
      v-for="(task, $taskIndex) of tasks" 
      :key="$taskIndex"
      class="board-list-task"
      @dragstart="onDragStart($event, $taskIndex, boardId)"
      draggable="true"
    >
      <div class="board-list-task__title">
        <span v-show="task.edit === false">{{ task.name }}</span>
        <input type="text" class="board-list-task__input"
        v-show="task.edit === true" 
        @keydown.enter="editTask($taskIndex); task.edit=false" 
        @keydown.esc="task.edit=false; count = 0"
        v-model="editTaskName"
        >
        <div class="option" v-show="task.edit === false">
          <input type="button" value="..." class="option-btn edit" @click="{task.edit=true; editTaskName = task.name}">
          <input type="button" value="x" class="option-btn close" @click="deleteTask($taskIndex)">
        </div>
      </div>
      <p v-show="task.edit != true" class="board-list-task__desc">{{ task.desc }}</p> 
      <input type="text" class="board-list-task__input"
        v-show="task.edit" 
        @keydown.enter="editTask($taskIndex); task.edit=false" 
        @keydown.esc="task.edit=false"
        v-model="editTaskDesc"
      >
    </li>
  </ul>
  <input type="button"
    class="board-list__btn"
    value="+ добавить задание"
    @click="modal = !modal"
  >
  <modal-window v-if="modal" @closeModal="closePopupModal" 
    @addingTask="addTask"
  />
</template>

<script>
import ModalWindow from './ModalWindow.vue'

export default {
  name: 'tasks-list',
  components: { ModalWindow },
  props: {
    boardId: Number,
    tasks: Array
  },
  emits: ['onDragStart'],
  data () {
    return {
      modal: false,
      editTaskName: '',
      editTaskDesc: ''
    }
  },
  methods: {
    addTask (data) {
      let tasks = this.tasks;
      this.$store.commit('ADD_TASK', { tasks, name: data.name, desc: data.desc })
      this.modal = false;
    },
    deleteTask (id) {
      let tasks = this.tasks;
      this.$store.commit('DELETE_TASK', { tasks, id })
    },
    editTask(id) {
      let tasks = this.tasks;
      this.$store.commit('EDIT_TASK', {
        tasks,
        id: id,
        name: this.editTaskName,
        desc: this.editTaskDesc
      })
      this.editTaskName = this.editTaskDesc = '';
    },
    closePopupModal () {
      this.modal = false;
    },
    onDragStart(e, taskIndex, fromBoardIndex){
      this.$emit('onDragStart', {e, taskIndex, fromBoardIndex})
    },
  }
}
</script>

<style lang="scss">
.board-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  &__btn {
    cursor: pointer;
  }
  &-task {
    margin: 20px 0;
    padding: 10px;
    background: $taskcolor;
    border: $tborder;
    border-radius: 5px;
    box-shadow: 0 5px 5px 0 rgb(0 0 0 / 5%);
    cursor: pointer;
    transition-duration: 0.6s;
    &:hover {
      box-shadow: 0 5px 5px 0 rgb(0 0 0 / 15%);
    }
    &__title {
      display: flex;
      justify-content: space-between;
      font: bolder 16px $font;
      
    }
    &__desc {
      font-size: 13px;
    }
    &__input {
      padding: 5px;
      margin-bottom: 5px;
    }
  }
}
</style>


