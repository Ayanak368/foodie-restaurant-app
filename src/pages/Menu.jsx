
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import foods from "../data/foods";

function Menu() {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("");

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || food.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-orange-50 px-6 py-12 md:px-[7%]">
      {/* Heading */}
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-bold tracking-widest text-orange-600">
          EXPLORE OUR FOOD
        </p>

        <h1 className="mb-3 text-4xl font-bold text-amber-950">
          Our Menu
        </h1>

        <p className="text-gray-600">
          Discover your favourite dishes.
        </p>
      </div>

      {/* Search */}
      <div className="mx-auto mb-6 max-w-md">
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-full border border-orange-200 bg-white px-5 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />
      </div>

      {/* Category filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {["All", "Fast Food", "Italian"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-6 py-2 font-semibold transition ${
              category === item
                ? "bg-orange-600 text-white"
                : "bg-white text-amber-950 hover:bg-orange-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Food cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={food.image}
              alt={food.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <p className="mb-2 text-sm font-medium text-orange-600">
                {food.category}
              </p>

              <h2 className="mb-4 text-xl font-bold text-amber-950">
                {food.name}
              </h2>

              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-orange-600">
                  ₹{food.price}
                </p>


<button
  onClick={() => {
    addToCart(food);
    setMessage(`${food.name} added successfully!`);
  }}
  aria-label={`Add ${food.name} to cart`}
  className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-2xl text-white transition hover:bg-orange-700"
>
  +
</button>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredFoods.length === 0 && (
        <p className="mt-8 text-center text-gray-600">
          No matching dishes found.
        </p>
      )}
      
{message && (
  <div
    role="status"
    className="fixed right-5 top-24 z-50 flex items-center gap-3 rounded-xl bg-green-600 px-5 py-4 text-white shadow-lg"
  >
    <span className="text-xl">✓</span>
    <span className="font-semibold">{message}</span>

    <button
      onClick={() => setMessage("")}
      aria-label="Close notification"
      className="ml-2 text-xl hover:text-green-200"
    >
      ×
    </button>
  </div>
)}
</section>

  );
}

export default Menu;
