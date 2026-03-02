import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>Car Wash</h3>

      <ul style={styles.ul}>
        <li>
          <Link to="/booking" style={styles.link}>Booking</Link>
        </li>
        <li>
          <Link to="/view-bookings" style={styles.link}>View Bookings</Link>
        </li>
        <li>
          <Link to="/login" style={styles.link}>Login</Link>
        </li>
        <li>
          <Link to="/register" style={styles.link}>Register</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#1976d2",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;