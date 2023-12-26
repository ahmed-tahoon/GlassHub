import axios from "axios";

const baseURL = "http://localhost:4000";
const ApiServices = {
  uploadFile: async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(`${baseURL}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      throw new Error("Error uploading file");
    }
  },

  createLocation: async (title, fileUrl, latitude, longitude) => {
    try {
      const data = {
        title,
        fileUrl,
        latitude,
        longitude,
      };

      const response = await axios.post(`${baseURL}/api/location/create`, data);
      return response.data;
    } catch (error) {
      throw new Error("Error creating location");
    }
  },

  getAllLocations: async () => {
    try {
      const response = await axios.get(`${baseURL}/api/location/all`);
      return response.data.data;
    } catch (error) {
      throw new Error("Error fetching locations");
    }
  },
};

export default ApiServices;
