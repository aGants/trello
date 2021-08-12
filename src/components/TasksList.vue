<template>
  <ul @drop="onDrop($event, 1)" >
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
</template>

<script>
// import { ref } from 'vue'

export default {
  name: 'TasksList',
  props: {
    boardId: String,
    tasks: Array
  },
  // setup() {
  //   function onDragStart(e, item) {}
  //   function onDrop(e, boardId) {}

  //   return {
  //     items, categories,
  //     onDragStart,
  //     onDrop
  //   }
  // },
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add() {

    },
    edit() {

    }
  }
}
</script>

<style lang="scss">
.board-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
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


