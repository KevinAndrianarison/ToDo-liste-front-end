<script setup>
/// IMPORTATION DES MODULES et COMPOSANTS
import ComponentItems from "./ComponentItems.vue";
import { onBeforeMount } from "vue";
import { useToDo } from "@/stores/ToDo";

/// DEFINITION DES VARIABLES
const ToDo = useToDo();

onBeforeMount(() => {
  ToDo.getAlltasks();
});
</script>

<template>
  <div class="body">
    <div class="form">
      <div>
        <h5 class="Titre mt-4">Ajoutez une tâche !</h5>
        <label for="task" class="form-label mt-4">Titre : </label>
        <input
          v-model="ToDo.titre"
          type="text"
          class="form-control"
          id=""
          aria-describedby=""
        />
      </div>
      <div class="form-group">
        <label for="exampleTextarea" class="form-label mt-2"
          >Description :</label
        >
        <textarea
          class="form-control"
          id="exampleTextarea"
          v-model="ToDo.commentaire"
          rows="3"
        ></textarea>
      </div>
      <label for="task" class="form-label mt-2">Date : </label>
      <input
        v-model="ToDo.date"
        type="date"
        class="date form-control"
        id="task"
        aria-describedby="emailHelp"
      />
      <div class="valider">
        <button
          @click.prevent="ToDo.valider"
          type="submit"
          :disabled="!ToDo.titre || !ToDo.commentaire || !ToDo.date"
          class="Enregistrer btn btn-primary mt-4"
        >
          Enregistrer
        </button>
      </div>
    </div>

    <!-- LISTE SANS RECHERCHE  -->

    <div class="array" v-if="ToDo.Search === null">
      <input
        type="text"
        class="recherche form-control"
        v-model="ToDo.Search"
        id=""
        aria-describedby="emailHelp"
        placeholder="Rechercher ici..."
      />
      <div class="listtitle">
        <h5 class="mt-4">Liste des tâches :</h5>
      </div>
      <div class="liSte">
        <ul class="list-group mt-2">
          <TransitionGroup tag="ul" name="fade" class="container">
            <li
              :key="index"
              v-for="(tabTask, index) in ToDo.tabTasks.reverse()"
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <ComponentItems
                :id="tabTask._id"
                :tabTask="tabTask.titre"
                :date="tabTask.date"
                :status="tabTask.status"
              ></ComponentItems>
            </li>
          </TransitionGroup>
        </ul>
      </div>
    </div>

    <!-- LISTE AVEC RECHERCHE  -->

    <div class="array" v-if="ToDo.Search != null">
      <input
        type="text"
        class="recherche form-control"
        v-model="ToDo.Search"
        id=""
        aria-describedby="emailHelp"
        placeholder="Rechercher ici..."
      />
      <div class="listtitle">
        <h5 class="mt-4">Liste des tâches :</h5>
      </div>
      <ul class="liSte list-group mt-4">
        <TransitionGroup tag="ul" name="fade" class="container">
          <li
            :key="index"
            v-for="(tabTask, index) in ToDo.filtrer(ToDo.Search).reverse()"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <ComponentItems
              :id="tabTask._id"
              :tabTask="tabTask.titre"
              :date="tabTask.date"
              :status="tabTask.status"
            ></ComponentItems>
          </li>
        </TransitionGroup>
      </ul>
    </div>
  </div>
</template>

<style scoped src="./Style/Main.css"></style>
