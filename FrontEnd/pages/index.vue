<template>
  <div>
    <router-link to="/createLocation" class="block text-right mb-4 mt-3">
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Add New Location
      </button>
    </router-link>

    <GoogleMap
      apiKey="AIzaSyBRVuAR8DhNd9pIeWtB0WfdH1gfCA2iM90"
      :center="mapCenter"
      :zoom="mapZoom"
      style="width: 100%; height: 1200px"
    >
      <Marker
        v-for="(location, index) in locations"
        :key="index"
        :options="{
          position: { lat: location.latitude, lng: location.longitude },
        }"
        @click="showInfoWindow(location)"
      />
      <InfoWindow :options="{ position: selectedLocationPosition }">
        <div v-if="selectedLocation" class="p-4 max-w-xs">
          <h2 class="text-xl font-semibold mb-2">
            {{ selectedLocation.title }}
          </h2>
          <img
            :src="selectedLocation.filePath"
            alt="Location Image"
            class="rounded-lg"
            style="max-width: 250px; max-height: 200px"
          />
        </div>
      </InfoWindow>
    </GoogleMap>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import ApiServices from "@/services/api/ApiService";

export default {
  components: {
    GoogleMap,
    Marker,
    InfoWindow,
  },
  setup() {
    const locations = ref([]);
    const selectedLocationPosition = ref(null);
    const selectedLocation = ref(null);
    const mapCenter = { lat: 24.6892, lng: 45.0445 };
    const mapZoom = ref(5);

    const loadLocations = async () => {
      try {
        locations.value = await ApiServices.getAllLocations();
        console.log("Locations loaded successfully!", locations.value);
      } catch (error) {
        console.error("Error loading locations:", error.message);
      }
    };

    const showInfoWindow = (location) => {
      if (selectedLocation.value === location) {
        selectedLocation.value = null;
      } else {
        selectedLocation.value = location;
        selectedLocationPosition.value = {
          lat: location.latitude,
          lng: location.longitude,
        };
      }
      console.log("showInfoWindow", selectedLocationPosition.value);
    };

    const closeInfoWindow = () => {
      selectedLocation.value = null;
    };

    onMounted(() => {
      loadLocations();
    });

    return {
      locations,
      selectedLocationPosition,
      selectedLocation,
      mapCenter,
      mapZoom,
      loadLocations,
      showInfoWindow,
      closeInfoWindow,
    };
  },
};
</script>

<style>
/* Your styles here */
</style>
