<template>
  <Html dir="rtl" land="ar">
    <div class="bg-gray-100 min-h-screen">
      <HeaderLayout />
      <div class="overflow-auto">
        <div class="mx-auto w-full sm:px-6 lg:px-8 px-4">
          <div class="mb-24">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </Html>
</template>

<script setup>
import HeaderLayout from "~/components/HeaderLayout.vue";
import FooterLayout from "~/components/FooterLayout.vue";
</script>
