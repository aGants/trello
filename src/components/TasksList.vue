<template>
  <ul @drop="onDrop($event, 1)" class="board-list">
    <li 
      v-for="task in tasks" 
      :key="task.id"
      class="board-list-task"
      @dragstart="onDragStart($event, 1)"
       draggable="true"
    >
      <span class="board-list-task__title">{{ task.name }}</span>
      <p class="board-list-task__desc">{{ task.desc }}</p> 
    </li>
  </ul>
  <input type="button"
    class="board-list__btn"
    value="+ добавить задание"
    @click="modal = !modal"
  >
  <Modal v-if="modal" @closeModal="closePopupModal" 
    @addingTask="addTask"
  />
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'TasksList',
  components: { Modal },
  props: {
    boardId: String,
    tasks: Array
  },
  data () {
    return {
      modal: false,
    }
  },
  methods: {
    addTask(data) {
      console.log(data)
      let tasks = this.tasks;
      this.$store.commit('ADD_TASK', { tasks, name: data.name, desc: data.desc })
      this.modal = false;
    },
    closePopupModal () {
      this.modal = false;
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
      font: bolder 16px $font;
    }
    &__desc {
      font-size: 13px;
    }
  }
}
</style>


