<script setup>
import { useToDo } from "@/stores/ToDo";
const ToDo = useToDo();
</script>

<template>
  <Transition>
    <div class="showModal" v-if="ToDo.openModal">
      <div class="formModal">
        <label for="task" class="form-label mt-4">Titre : </label>
        <input
          v-model="ToDo.titreModif"
          type="text"
          class="form-control"
          id=""
          aria-describedby=""
        />
        <div class="form-group">
          <label for="exampleTextarea" class="form-label mt-4"
            >Description :</label
          >
          <textarea
            class="form-control"
            id="exampleTextarea"
            v-model="ToDo.commentaireModif"
            rows="3"
          ></textarea>
        </div>
        <label for="task" class="form-label mt-4">Date : </label>
        <input
          v-model="ToDo.dateModif"
          type="date"
          class="form-control"
          id="task"
          aria-describedby="emailHelp"
        />
        <div class="valider">
          <button
            @click.prevent="ToDo.Modifier"
            type="submit"
            :disabled="
              !ToDo.titreModif || !ToDo.commentaireModif || !ToDo.dateModif
            "
            class="Modifier btn btn-primary mt-5"
          >
            Modifier
          </button>
          <button
            @click.prevent="ToDo.anuller"
            type="button"
            class="Annuller btn btn-warning mt-5"
          >
            Annuller
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped src="./Style/Modal.css"></style>
