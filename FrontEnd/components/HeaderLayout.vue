<template>
  <header>
    <nav class="bg-dark border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <router-link
          to="/"
          class="self-center text-xl font-semibold whitespace-nowrap text-white"
          >GlassHub
        </router-link>

        <div class="flex items-center lg:order-2">
          <router-link
            to="/createLocation"
            class="text-gray-800 bg-dark font-bold dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >Add Location
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import ameralLogo from "~/assets/images/logo.svg";
</script>
