<template>
  <div>
    <p class="board__title">{{ name }}</p>
      <TasksList 
        class="board-list"
        :boardId="boardId"
        :tasks="tasksList"
      />
  </div>
</template>

<script>
import TasksList from './TasksList'

export default {
  name: 'Board',
  components: { 
    TasksList
  },
  props: {
    boardId: String,
    name: String
  },
  data() {
    return {
      tasksList: [
        {id: '1', title: 'Задание1', desc: 'Описание'},
        {id: '2', title: 'Задание2', desc: 'Описание'},
        {id: '3', title: 'Задание3', desc: 'Описание'}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.board {
  width: 200px;
  padding: 5px 25px 20px;
  background-color: $board;
  border: $bborder;
  border-radius: 5px;
  @media (max-width: $screen-md) {
    width: 80%;
  }
  &__title {
    font: bold 20px  $font;
    text-transform: uppercase;
  }
}
</style>
