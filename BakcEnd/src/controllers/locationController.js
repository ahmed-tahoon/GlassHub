const LocationService = require("../services/locationService");
const config = require("../../config/config"); 
const { baseURL } = config.development;

class LocationController {
  async uploadFile(req, res, next) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const filePath = req.file.path;

      const fileUrl = `${baseURL}/${filePath}`;
      res.json({ status: "success", fileUrl });
    } catch (error) {
      console.error("Error during file upload:", error);
      next(error);
    }
  }

  async createLocation(req, res, next) {
    try {
      const { title, fileUrl, latitude, longitude } = req.body;

      if (!title || !fileUrl || !latitude || !longitude) {
        return res.status(400).json({
          error:
            "Incomplete data. Please provide title, filePath, latitude, and longitude.",
        });
      }

      const newLocation = await LocationService.addLocation(
        title,
        fileUrl,
        latitude,
        longitude
      );

      res.status(201).json({ status: "success", data: newLocation });
    } catch (error) {
      next(error);
    }
  }

  async getAllLocations(req, res, next) {
    try {
      const locations = await LocationService.getAllLocations();

      res.json({ status: "success", data: locations });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = LocationController;
