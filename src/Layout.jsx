
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="min-h-screen bg-orange-50 flex-col">
      <Navbar />

    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    </div>
  );
}

export default Layout;
