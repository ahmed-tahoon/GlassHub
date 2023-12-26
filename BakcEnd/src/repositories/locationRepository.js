const Location = require("../models/locationModel");

class LocationRepository {
  async createLocation(title, filePath, latitude, longitude) {
    try {
      const newLocation = await Location.create({
        title,
        filePath,
        latitude,
        longitude,
      });
      return newLocation;
    } catch (error) {
      throw new Error("Error creating location");
    }
  }

  async getAllLocations() {
    try {
      const locations = await Location.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      return locations;
    } catch (error) {
      throw new Error(`Error fetching locations: ${error.message}`);
    }
  }
}

module.exports = new LocationRepository();
