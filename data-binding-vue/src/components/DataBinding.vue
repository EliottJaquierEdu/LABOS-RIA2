<script setup>
const jsonData = {
  name: "John Doe",
  items: ["Item 1", "Item 2", "Item 3", "Item 4"]
};
</script>

<template>
  <div id="name-container">
    <p>{{ jsonData.name }}</p>
  </div>
  <ul>
    <li v-for="item in jsonData.items">{{ item }}</li>
  </ul>
</template>

<style scoped>

</style>
