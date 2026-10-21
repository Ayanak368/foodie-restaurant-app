
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex h-20 items-center justify-between bg-orange-50 px-[7%]">
      <Link to="/" className="flex items-center">
        <img
          src="/logo.png"
          alt="Foodie restaurant"
          className="h-16 w-16 object-contain"
        />
      </Link>

      <div className="flex items-center gap-8">
        <Link to="/" className="font-semibold text-amber-950 hover:text-orange-600">
          Home
        </Link>

        <Link to="/menu" className="font-semibold text-amber-950 hover:text-orange-600">
          Menu
        </Link>

        <Link to="/about" className="font-semibold text-amber-950 hover:text-orange-600">
          About
        </Link>

        <Link
          to="/cart"
          className="rounded-full bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
        >
          My Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
