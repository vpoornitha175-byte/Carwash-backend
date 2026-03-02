// backend/controllers/bookingController.js

const bookings = [];

// Create Booking
const createBooking = (req, res) => {
  try {
    const { name, carNumber, service, date, time } = req.body;

    if (!name || !carNumber || !service || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBooking = {
      id: bookings.length + 1,
      name,
      carNumber,
      service,
      date,
      time,
      status: "Booked"
    };

    bookings.push(newBooking);

    res.status(201).json({
      message: "Car wash booked successfully",
      booking: newBooking
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get All Bookings
const getBookings = (req, res) => {
  res.json(bookings);
};

module.exports = { createBooking, getBookings };