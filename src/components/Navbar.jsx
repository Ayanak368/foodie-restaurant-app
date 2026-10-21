
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img
          src="/logo.png"
          alt="Foodie restaurant"
          className="logo"
        />
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">My Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
