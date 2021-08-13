<template>
  <h1>Trello</h1>
  <div class="list">
    <Board 
      v-for="board in board.list" :key="board.name" 
      class="board" :board="board" 
    />
    <div class="board">
      <input type="button" class="board-list-task" 
        value="Добавить доску"
        @click="modal = !modal"
      />
    </div>
  </div>
  <Modal v-if="modal" @closeModal="closePopupModal" 
    @addingBoard="addBoard"
  />
</template>

<script>
import { mapState } from 'vuex'
import Board from './components/Board.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Board, Modal
  },
  props: {},
  data() {
    return {
      modal: false,
      addingTask: false,
      newName: ''
    }
  }, 
  computed: mapState(['board']),
  methods: {
    closePopupModal () {
      this.modal = false;
    },
    addBoard (name) {
      this.boardList.push({name: name, tasks: []})
      this.modal = false;
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

</style>
