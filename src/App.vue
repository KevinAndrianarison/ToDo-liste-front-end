<script setup>
import ComponentMain from "./components/ComponentMain.vue";
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentModal from "./components/ComponentModal.vue";
import ComponentMessage from "./components/ComponentMessage.vue";
</script>

<template>
  <ComponentHeader></ComponentHeader>
  <ComponentMain></ComponentMain>
  <Teleport to="body">
    <ComponentModal></ComponentModal>
  </Teleport>
  <Teleport to="body">
    <ComponentMessage></ComponentMessage>
  </Teleport>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
</style>
