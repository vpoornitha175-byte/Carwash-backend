import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Booking from "./Booking";
import ViewBookings from "./ViewBookings";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <Navbar />   {/* ✅ MUST be here */}

      <Routes>
        <Route path="/" element={<Booking />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/view-bookings" element={<ViewBookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;