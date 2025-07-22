/**
 * Express.js Server for Weather Safety Checker
 * POST /check-weather endpoint to determine hiking safety
 */

import express from "express";
import { isSafeToHike } from "./weatherUtils.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// POST /check-weather endpoint
app.post("/check-weather", (req, res) => {
  try {
    const { temperature, windSpeed } = req.body;

    // Validate required fields
    if (temperature === undefined || windSpeed === undefined) {
      return res.status(400).json({
        error: "Missing required fields: temperature and windSpeed",
      });
    }

    // Check hiking safety
    const result = isSafeToHike(temperature, windSpeed);

    res.json(result);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// Handle 404 for other routes
app.all("*", (req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Weather checker server running on http://localhost:${PORT}`);
});

// Export app and server for testing
export { app, server };
