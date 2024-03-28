<script setup>
import { defineProps } from "vue";
import { useToDo } from "@/stores/ToDo";
const ToDo = useToDo();

defineProps(["id", "tabTask", "date", "status"]);
</script>

<template>
  <div class="check">
    <input
      @click="ToDo.toggleColor(id, status)"
      class="form-check-input"
      type="checkbox"
      id="id"
    />
  </div>
  <div class="items">
    <div class="content form-check form-check-inline">
      <p class="title" :class="{ red: !status ? true : false }">
        {{ tabTask }}
      </p>
      <p class="date">{{ date }}</p>
    </div>
    <div class="buttonStyle">
      <button
        @click.prevent="ToDo.affichage(id)"
        type="button"
        class="Modifier btn btn-primary"
      >
        Modifier
      </button>
      <button
        @click.prevent="ToDo.suppr(id)"
        type="button"
        class="Supprimer btn btn-danger"
      >
        Supprimer
      </button>
    </div>
  </div>
</template>

<style scoped src="./Style/Items.css"></style>
