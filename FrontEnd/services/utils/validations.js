export function validateLocation(title, file, coordinates) {
  const errors = {
    title: "",
    file: "",
    coordinates: { lat: "", lng: "" },
  };

  if (!title.trim()) {
    errors.title = "Title is required.";
  }

  if (!file) {
    errors.file = "Image is required.";
  }

  if (coordinates.lat === null || coordinates.lng === null) {
    errors.coordinates.lat = "Latitude is required.";
    errors.coordinates.lng = "Longitude is required.";
  }

  const hasErrors = Object.values(errors).some((error) => error !== "");
  return !hasErrors;
}
