<template>
  <div class="counter">
    <h2>Counter: {{ count }}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++;
    };

    return { count, increment };
  },
};
</script>

<style scoped>
.counter {
  margin-top: 20px;
}
button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>
