
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-amber-950 px-6 py-10 text-orange-50">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="mb-3 text-2xl font-extrabold text-orange-400">
            Foodie
          </h2>
          <p className="max-w-xs text-sm leading-6 text-orange-100/80">
            Fresh, tasty and delicious food delivered right to your doorstep.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-3 font-bold text-white">Quick Links</h3>
          <div className="flex flex-col items-start gap-2 text-sm">
            <Link to="/" className="hover:text-orange-400">Home</Link>
            <Link to="/menu" className="hover:text-orange-400">Menu</Link>
            <Link to="/about" className="hover:text-orange-400">About</Link>
            <Link to="/cart" className="hover:text-orange-400">My Cart</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-3 font-bold text-white">Contact Us</h3>
          <p className="text-sm leading-6 text-orange-100/80">
            Have questions about your order?
            <br />
            We'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-orange-100/20 pt-5 text-center text-sm text-orange-100/70">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
