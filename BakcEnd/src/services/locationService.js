const locationRepository = require('../repositories/locationRepository');

class LocationService  {
  async addLocation(title, filePath, latitude, longitude) {
    try {
      return await locationRepository.createLocation(title, filePath, latitude, longitude);
    } catch (error) {
      throw new Error('Error adding location');
    }
  }

  async getAllLocations() {
    try {
        console.log("locationService");
      return await locationRepository.getAllLocations();
    } catch (error) {
      throw new Error('Error fetching locations' ,error);
    }
  }

 
}

module.exports = new LocationService();