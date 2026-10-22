
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 flex h-20 items-center justify-between bg-orange-50 px-4 sm:px-[5%] lg:px-[7%]">

      {/* Logo */}
      <Link to="/" onClick={closeMenu} className="flex shrink-0 items-center">
        <img
          src="/logo.png"
          alt="Foodie restaurant"
          className="h-14 w-14 object-contain sm:h-16 sm:w-16"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 md:flex">
        <Link
          to="/"
          className="font-semibold text-amber-950 hover:text-orange-600"
        >
          Home
        </Link>

        <Link
          to="/menu"
          className="font-semibold text-amber-950 hover:text-orange-600"
        >
          Menu
        </Link>

        <Link
          to="/about"
          className="font-semibold text-amber-950 hover:text-orange-600"
        >
          About
        </Link>

        <Link
          to="/cart"
          className="rounded-full bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
        >
          My Cart
        </Link>
      </div>

      {/* Mobile Toggle Button */}
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        className="text-3xl text-amber-950 md:hidden"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-20 flex w-full flex-col gap-5 bg-orange-50 px-6 py-6 shadow-lg md:hidden">
          <Link
            to="/"
            onClick={closeMenu}
            className="font-semibold text-amber-950 hover:text-orange-600"
          >
            Home
          </Link>

          <Link
            to="/menu"
            onClick={closeMenu}
            className="font-semibold text-amber-950 hover:text-orange-600"
          >
            Menu
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="font-semibold text-amber-950 hover:text-orange-600"
          >
            About
          </Link>

          <Link
            to="/cart"
            onClick={closeMenu}
            className="w-fit rounded-full bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            My Cart
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;