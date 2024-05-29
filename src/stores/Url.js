import { defineStore } from "pinia";
import { ref } from "vue";

export const useUrl = defineStore("Url", () => {
  const url = ref("https://to-do-liste-back-end.vercel.app");

  return {
    url,
  };
});
