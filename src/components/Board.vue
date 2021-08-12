<template>
  <div>
    <p class="board__title">{{ name }}</p>
      <TasksList 
        class="board-list"
        :boardId="boardId"
        :tasks="tasks"
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
    name: String,
    tasks: Array
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
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
  &__title {
    font: bold 20px  $font;
    text-transform: uppercase;
    margin: 5px 0;
  }
}
</style>
