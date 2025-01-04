const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const menuRoutes = require("./routes/menu");
const ordersRoutes = require("./routes/orders");
const cartRoutes = require("./routes/cart");
const reservationRoutes = require("./routes/reservationRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.set("strictQuery", true); // Suppress strictQuery warning
mongoose
  .connect("mongodb+srv://02fe22bcs047:02fe22bcs047@projects.4csoa.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Error connecting to MongoDB:", err));

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Backend!");
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/cart", cartRoutes);
app.use(reservationRoutes); // Reservation routes are integrated here

// 404 error handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// General error handler
app.use((err, req, res, next) => {
  console.error("🔥 Internal Server Error:", err.stack);
  res.status(500).json({ error: "Something went wrong on the server!" });
});

// Server listening
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
