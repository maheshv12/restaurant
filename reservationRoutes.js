const express = require("express");
const Reservation = require("../models/reservation"); // Import the Reservation model

const router = express.Router();

// POST /api/reservation - Handle table reservation
router.post("/api/reservation", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, guests, date, time } = req.body;

    // Validate input
    if (!firstName || !lastName || !email || !phone || !guests || !date || !time) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create a new reservation
    const reservation = new Reservation({
      firstName,
      lastName,
      email,
      phone,
      guests,
      date: new Date(date), // Ensure date is stored as a Date object
      time,
    });

    // Save to the database
    await reservation.save();

    res.status(201).json({ message: "Reservation successful!" });
  } catch (error) {
    console.error("Error saving reservation:", error);
    res.status(500).json({ message: "Failed to save reservation. Try again later." });
  }
});

module.exports = router;
