<template>
  <div>
    <h1>{{ name }}</h1>
    <div v-for="task in tasks" :key="task.id" class="boar-task">
      <p>задание</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Board',
  props: {
    name: String
  },
  data() {
    return {
      tasks: [1, 2]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
