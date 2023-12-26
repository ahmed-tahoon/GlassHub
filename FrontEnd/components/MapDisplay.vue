<template>
  <div>
    <GoogleMap
      api-key="AIzaSyBRVuAR8DhNd9pIeWtB0WfdH1gfCA2iM90"
      style="width: 100%; height: 400px"
      :center="center"
      :zoom="9"
      @click="handleMapClick"
    >
      <Marker :options="{ position: coordinates }" />
    </GoogleMap>
  </div>
</template>

<script>
import { ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  props: {
    initialCenter: {
      type: Object,
      default: () => ({ lat: 24.6892, lng: 45.0445 }), // Default center coordinates
    },
  },
  components: {
    GoogleMap,
    Marker,
  },
  setup(props, { emit }) {
    const coordinates = ref(null);
    const center = ref(props.initialCenter);

    function handleMapClick(event) {
      coordinates.value = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      emit("mapClick", coordinates.value); // Emit an event with clicked coordinates
    }

    return {
      coordinates,
      center,
      handleMapClick,
    };
  },
};
</script>

<style>
/* Your styles here */
</style>
