<template>
  <div>
    <section class="my-4">
      <LocationForm />
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import LocationForm from "~/components/LocationForm.vue";

definePageMeta({
  layout: "default",
});
</script>
