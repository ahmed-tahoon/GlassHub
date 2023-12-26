<template>
  <form
    @submit.prevent="addLocation"
    class="max-w-3/6 mx-auto mt-6 bg-white rounded-md shadow-md p-6 w-1/2"
  >
    <div v-if="message" class="text-red-500 text-sm mb-2">{{ message }}</div>
    <div class="mb-4">
      <label for="title" class="block text-gray-700 font-semibold mb-2"
        >Title:</label
      >
      <input
        type="text"
        id="title"
        v-model="title"
        placeholder="Enter title"
        class="w-full border border-gray-300 rounded-md px-3 py-2"
        required
      />
    </div>
    <div class="mb-4">
      <label for="file" class="block text-gray-700 font-semibold mb-2"
        >Image:</label
      >
      <input
        type="file"
        id="file"
        @change="handleFileChange"
        accept="image/jpeg, image/png, image/webp"
        class="w-full border border-gray-300 rounded-md px-3 py-2"
        required
      />
      <p
        class="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        jpeg, png, webp.
      </p>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-semibold mb-2">Coordinates:</label>
      <div class="relative">
        <MapDisplay :initialCenter="center" @mapClick="handleMapClick" />

        <div
          v-if="coordinates"
          class="absolute top-0 right-0 bg-white p-2 rounded-md"
        ></div>
      </div>
      <div class="mt-2">
        <label class="block text-gray-700 font-semibold mb-2">Latitude:</label>
        <input
          type="text"
          v-model="coordinates.lat"
          class="w-full border border-gray-300 rounded-md px-3 py-2"
          readonly
        />
      </div>
      <div class="mt-2">
        <label class="block text-gray-700 font-semibold mb-2">Longitude:</label>
        <input
          type="text"
          v-model="coordinates.lng"
          class="w-full border border-gray-300 rounded-md px-3 py-2"
          readonly
        />
      </div>
    </div>
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
    >
      Add Location
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import ApiServices from "@/services/api/ApiService";
import MapDisplay from "@/components/MapDisplay.vue";
import { useRouter } from "vue-router";
import { validateLocation } from "@/services/utils/validations";

export default {
  components: {
    GoogleMap,
    Marker,
    InfoWindow,
    MapDisplay,
  },
  setup() {
    const title = ref("");
    let file = null;
    const coordinates = ref({
      lat: null,
      lng: null,
    });
    const center = ref({ lat: 24.6892, lng: 45.0445 });
    const markerOptions = ref({});
    const router = useRouter();

    const loading = ref(false);
    const message = ref("");

    function handleFileChange(event) {
      file = event.target.files[0];
    }

    function handleMapClick(clickedCoordinates) {
      coordinates.value = clickedCoordinates;

      markerOptions.value.position = coordinates.value;
    }

    async function addLocation() {
      try {
        loading.value = true;
        const hasErrors = validateLocation(
          title.value,
          file,
          coordinates.value
        );
        

        if (hasErrors) {
          message.value = "Please fill all the fields!";
          return;
        }

        const fileUploadResponse = await ApiServices.uploadFile(file);
        const { fileUrl } = fileUploadResponse;

        const latitude = coordinates.value.lat;
        const longitude = coordinates.value.lng;

        await ApiServices.createLocation(
          title.value,
          fileUrl,
          latitude,
          longitude
        );

        console.log("Location added successfully!");
        router.push("/");
        loading.value = false;
      } catch (error) {
        console.error("Error adding location:", error.message);
        loading.value = false;
      }
    }

    return {
      title,
      handleFileChange,
      handleMapClick,
      addLocation,
      coordinates,
      markerOptions,
      center,
    };
  },
};
</script>

<style>
/* Your styles here */
</style>
