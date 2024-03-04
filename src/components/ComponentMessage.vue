<script setup>
import { useMessages } from "@/stores/Messages";
const Messages = useMessages();
</script>

<template>
  <div class="alert">
    <Transition>
      <div class="form-group has-success" v-if="Messages.messageSucces">
        <input
          type="text"
          class="success form-control is-valid"
          id="inputValid"
          v-model="Messages.messageSucces"
        />
      </div>
    </Transition>
    <Transition>
      <div class="form-group has-danger" v-if="Messages.messageError">
        <input
          type="text"
          class="danger form-control is-invalid"
          id="inputInvalid"
          v-model="Messages.messageError"
        />
      </div>
    </Transition>
  </div>
</template>

<style scoped src="./Style/Message.css"></style>
