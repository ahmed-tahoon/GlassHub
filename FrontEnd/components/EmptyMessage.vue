<template>
  <div class="min-h-screen flex flex-col items-center justify-center mb-4">
    <img
      src="~/assets/images/empty.svg"
      alt="empty"
      class="mx-auto"
      style="width: 200px; height: auto"
    />
    <h3 class="text-dark text-bold text-sm mt-4">{{ message }}</h3>
  </div>
</template>

<script>
import { defineProps } from "vue";

export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
