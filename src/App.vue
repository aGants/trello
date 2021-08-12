<template>
  <h1>Trello</h1>
  <div class="list">
    <Board 
      v-for="board in boardList" :key="board.name" 
      class="board" :name="board.name" :tasks="tasksList"
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
      newName: '',
      boardList: [
        { name: 'to do' }, 
        { name: 'in progress' },
        { name: 'done' }
      ],
      tasksList: [
        {id: '1', name: 'Задание1', desc: 'Описание'},
        {id: '2', name: 'Задание2', desc: 'Описание'},
        {id: '3', name: 'Задание3', desc: 'Описание'}
      ]
    }
  }, 
  methods: {
    closePopupModal () {
      this.modal = false;
    },
    addBoard (name) {
      this.boardList.push({name: name})
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
