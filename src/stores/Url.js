import { defineStore } from "pinia";
import { ref } from "vue";

export const useUrl = defineStore("Url", () => {
  const url = ref("http://localhost:4000");

  return {
    url,
  };
});