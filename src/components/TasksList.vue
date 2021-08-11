<template>
  <ul>
    <li 
      v-for="task in tasks" 
      :key="task.id"
      class="board-list-task"
    >
      <span class="board-list-task__title">{{ task.title }}</span>
      <p class="board-list-task__desc">{{ task.desc }}</p> 
    </li>
  </ul>
</template>

<script>

export default {
  name: 'TasksList',
  props: {
    boardId: String,
    tasks: Array
  },
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

<style scoped lang="scss">
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
    &__title {
      font: bolder 16px $font;
    }
    &__desc {
      font-size: 13px;
    }
  }
}
</style>


