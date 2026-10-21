
import { useState } from "react";
import foods from "../data/foods";
import "../App.css";

function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");


  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || food.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="popular menu-page">
      <div className="section-heading">
        <div>
          <p className="tagline">EXPLORE OUR FOOD</p>
          <h2>Our Menu</h2>
          <p>Discover your favourite dishes.</p>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="menu-search"
      />

      <div className="category-buttons">
        {["All", "Fast Food", "Italian"].map((item) => (
          <button
            key={item}
            className={
              category === item ? "category-btn active" : "category-btn"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="food-grid">
        {filteredFoods.map((food) => (
          <div className="food-card" key={food.id}>
            <img src={food.image} alt={food.name} />

            <div className="food-info">
              <p className="food-category">{food.category}</p>
              <h3>{food.name}</h3>

              <div className="food-bottom">
                <p className="price">₹{food.price}</p>
                <button
                  className="add-button"
                  aria-label={`Add ${food.name} to cart`}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFoods.length === 0 && (
        <p className="empty-message">No matching dishes found.</p>
      )}
    </section>
  );
}

export default Menu;
