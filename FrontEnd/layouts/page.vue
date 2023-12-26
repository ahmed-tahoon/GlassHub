<template>
  <Html dir="rtl" land="ar">
    <div
      class="bg-white min-h-screen z-50 inset-0 flex absolute flex-col overflow-hidden dark:bg-gray-900"
      style="contain: layout size style"
    >
      <header>
        <NuxtLink
          to="/"
          class="mx-auto flex max-w-7xl dark:text-gray-100 items-center p-4 lg:px-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>

          <div class="mx-2 font-medium">{{ $route.name }}</div>
        </NuxtLink>
      </header>
      <div
        class="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 overflow-auto w-full grid-container"
      >
        <slot />
      </div>
    </div>
  </Html>
</template>

<script setup>
import arrowLeft from "~/assets/images/arrow-left.svg";
</script>
<style>
.grid-container::-webkit-scrollbar {
  width: 0; /* Hide scrollbar in WebKit browsers */
}
.grid-container {
  overflow-y: scroll; /* Enable vertical scrolling */
  scrollbar-width: none; /* Hide scrollbar in Firefox */
}
</style>
