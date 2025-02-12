<template>
  <div class="app">
    <h1>Vue Counter App</h1>
    <Counter></Counter>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";

export default {
  components: {
    Counter,
  },
};
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
</style>
