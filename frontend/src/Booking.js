import { useState } from "react";

function Booking() {
  const [name, setName] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      carNumber,
      service,
      date,
      time,
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();
      setMessage(data.message);

      // clear form
      setName("");
      setCarNumber("");
      setService("");
      setDate("");
      setTime("");
    } catch (error) {
      setMessage("Booking failed");
    }
  };

  return (
    <div>
      <h2>Car Wash Booking</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="text"
          placeholder="Car Number"
          value={carNumber}
          onChange={(e) => setCarNumber(e.target.value)}
          required
        />
        <br /><br />

        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="">Select Service</option>
          <option value="Basic Wash">Basic Wash</option>
          <option value="Premium Wash">Premium Wash</option>
          <option value="Full Service">Full Service</option>
        </select>
        <br /><br />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Book Now</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Booking;