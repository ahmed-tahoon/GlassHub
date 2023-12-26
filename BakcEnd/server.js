const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("./src/middleware/errorHandler");
const requestLogger = require("./src/middleware/requestLogger");
const routes = require("./src/routes/locationRoutes");
const cors = require("cors");
const path = require("path");

const app = express();
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware setup
app.use(bodyParser.json());
app.use(requestLogger);

app.use(cors());

// Routes setup
app.use("/api", routes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
