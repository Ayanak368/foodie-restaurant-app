
import { Link } from "react-router-dom";

function FoodCard({ food }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Food Image */}
      <div className="relative overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-orange-600 backdrop-blur">
          {food.category}
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-orange-600 px-3 py-1 text-sm font-bold text-white shadow-lg">
          ₹{food.price}
        </span>
      </div>

      {/* Food Details */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-amber-950">
          {food.name}
        </h3>

        <p className="mt-1 text-sm text-yellow-500">★★★★★</p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-500">Freshly prepared</p>

          <Link
            to="/menu"
            className="rounded-full bg-orange-100 px-5 py-2 font-semibold text-orange-700 transition group-hover:bg-orange-600 group-hover:text-white"
          >
            Order →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
