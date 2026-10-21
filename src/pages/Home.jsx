
import { Link } from "react-router-dom";
import "../App.css";
import foods from "../data/foods";



function Home() {
  
  return (
    <>
      {/* Hero section */}
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">FRESH FOOD, HAPPY MOOD</p>

          <h1>
            Delicious food,
            <br />
            delivered <span>to you.</span>
          </h1>

          <p className="hero-description">
            Enjoy your favourite meals, freshly prepared
            and delivered right to your doorstep.
          </p>

          <Link to="/menu" className="primary-button">
            Explore Menu →
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800"
            alt="Delicious freshly prepared food"
          />
        </div>
      </section>

      {/* Popular dishes */}
      <section className="popular">
        <div className="section-heading">
          <div>
            <p className="tagline">MADE WITH LOVE</p>
            <h2>Popular dishes</h2>
          </div>

          <Link to="/menu" className="view-menu">
            View full menu →
          </Link>
        </div>

        <div className="food-grid">
          {foods.map((food) => (
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
      </section>

      {/* Footer */}
      <footer className="footer">
        <h2>
          Foodie<span>.</span>
        </h2>
        <p>Good food. Happy people.</p>
        <p>© 2026 Foodie. Made with love.</p>
      </footer>
    </>
  );
}

export default Home;
