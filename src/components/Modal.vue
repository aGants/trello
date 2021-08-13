<template>
  <div class="modal">
    <div class="modal-content">
      <label>Название
        <input type="text" class="modal-content__input"
          v-bind:class="{error: isError}"
          v-model="name" 
        >
      </label>
      <label>Описание
        <input type="text" class="modal-content__input"
          v-model="desc" 
        >
      </label>

      <div class="modal-content-block">
        <input type="button" class="modal-content-block__btn save"
          value="сохранить" @click="addingTask"
        >
        <input type="button" class="modal-content-block__btn cancel"
          value="отменить" @click="closeModal"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {
      name: '',
      desc: '',
      isError: false,
    }
  },
  methods: {
    closeModal() {
      this.isError = false;
      this.$emit('closeModal')
    },
    addingTask() {
      if (this.name != '') {
        this.$emit('addingTask', {name: this.name, desc:this.desc})
        this.isError = false;
      } else {
        this.isError = true;
      }
    }
  }
}
</script>

<style lang="scss">
.modal {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  opacity: 1;
  pointer-events: all;
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 250px;
    max-height: 90vh;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 4px 16px 0 rgb(0 0 0 / 40%);
    &__input {
      width: 90%;
      padding: 5px 10px;
      outline: none;
      outline-offset: 0;
    }
    &-block {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 15px;
      &__btn {
        padding: 5px 15px;
        border: none;
        cursor: pointer;
        transition: 0.8s;
        box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 10%);
        &:hover {
          box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 30%);
        }
        &:active {
          box-shadow: 0px 0px 10px 4px rgb(0 0 0 / 50%);
        }
        &.save {
          background: #42b983;
        }
        &.cancel {
          background: #ff493f;
        }
      }
    }
  }
}
.error {
  border-color:#ff493f;
}
</style>