<script setup>
import { useMessages } from "@/stores/Messages";
const Messages = useMessages();
</script>

<template>
  <div class="alert">
    <Transition>
      <div class="form-group has-success" v-if="Messages.messageSucces">
        <div class="success form-control is-valid">
          {{ Messages.messageSucces }}
        </div>
      </div>
    </Transition>
    <Transition>
      <div class="form-group has-danger" v-if="Messages.messageError">
        <div class="danger form-control is-invalid">
          {{ Messages.messageError }}
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped src="./Style/Message.css"></style>
