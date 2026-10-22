import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import foods from "../data/foods";
import FoodCard from "../components/FoodCard";

// 👉 Swap this URL for any image you like (a local import also works)
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80";

const categoryEmoji = {
  burger: "🍔",
  pizza: "🍕",
  pasta: "🍝",
  biryani: "🍛",
  dessert: "🍰",
  drinks: "🥤",
  salad: "🥗",
  snacks: "🍟",
};

// Fades + slides children in when they scroll into view
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Home() {
  const categories = [...new Set(foods.map((f) => f.category))];

  return (
    <main className="overflow-hidden bg-orange-50">
      {/* ───────── Hero ───────── */}
      <section className="relative flex min-h-[88vh] flex-col items-center justify-center gap-12 px-6 py-16 md:flex-row md:px-[7%]">
        {/* soft background blobs */}
        <div className="animate-blob pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="animate-blob pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl [animation-delay:3s]" />

        {/* Text */}
        <div className="relative z-10 max-w-xl text-center md:text-left">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-orange-600 shadow-sm">
            🛵 Free delivery on your first order
          </span>

          <h1 className="animate-fade-up-delay mt-6 text-5xl font-extrabold leading-tight text-amber-950 md:text-7xl">
            Taste the
            <span className="relative mx-2 inline-block text-orange-600">
              Joy
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 120 10"
                fill="none"
              >
                <path
                  d="M2 7 C 30 0, 60 0, 118 6"
                  stroke="#fb923c"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="animate-draw"
                />
              </svg>
            </span>
            of Fresh Food
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 text-lg text-amber-900/80">
            Your favourite meals, freshly prepared and delivered hot to your
            doorstep — fast, fresh and full of flavour.
          </p>

          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Link
              to="/menu"
              className="animate-pulse-soft inline-block rounded-full bg-orange-600 px-8 py-3 font-semibold text-white shadow-lg shadow-orange-300 transition hover:-translate-y-0.5 hover:bg-orange-700"
            >
              Order Now →
            </Link>
            <Link
              to="/menu"
              className="inline-block rounded-full border-2 border-orange-200 bg-white px-8 py-3 font-semibold text-orange-700 transition hover:border-orange-400"
            >
              View Menu
            </Link>
          </div>

          {/* stats */}
          <div className="animate-fade-up-delay-2 mt-10 flex justify-center gap-8 md:justify-start">
            {[
              ["30 min", "Avg. delivery"],
              ["50+", "Tasty dishes"],
              ["4.8★", "Happy customers"],
            ].map(([big, small]) => (
              <div key={small}>
                <p className="text-2xl font-extrabold text-amber-950">{big}</p>
                <p className="text-sm text-amber-900/70">{small}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative z-10 flex w-full max-w-md items-center justify-center">
          {/* spinning dashed ring */}
          <div className="animate-spin-slow absolute h-[110%] w-[110%] rounded-full border-2 border-dashed border-orange-300" />
          {/* orange circle */}
          <div className="absolute h-[88%] w-[88%] rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-2xl" />

          <img
            src={HERO_IMAGE}
            alt="Delicious food from Foodie"
            className="animate-float-food relative aspect-square w-[82%] rounded-full object-cover shadow-2xl ring-8 ring-white"
          />

          {/* floating cards */}
          <div className="animate-float-slow absolute -left-2 top-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-8">
            <span className="text-2xl">⭐</span>
            <div>
              <p className="text-sm font-bold text-amber-950">4.8 Rating</p>
              <p className="text-xs text-gray-500">2k+ reviews</p>
            </div>
          </div>

          <div className="animate-float-slower absolute -right-2 bottom-12 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-6">
            <span className="text-2xl">🛵</span>
            <div>
              <p className="text-sm font-bold text-amber-950">Fast Delivery</p>
              <p className="text-xs text-gray-500">Under 30 mins</p>
            </div>
          </div>

          <span className="animate-float-slower absolute -top-2 right-6 text-4xl">
            🍅
          </span>
          <span className="animate-float-slow absolute bottom-0 left-6 text-4xl">
            🌿
          </span>
        </div>
      </section>

      {/* ───────── Categories ───────── */}
      <section className="px-6 pb-6 md:px-[7%]">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, i) => (
              <Link
                to="/menu"
                key={cat}
                style={{ animationDelay: `${i * 120}ms` }}
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-sm transition hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg"
              >
                <span className="text-2xl transition group-hover:scale-125">
                  {categoryEmoji[cat?.toLowerCase()] || "🍽️"}
                </span>
                <span className="font-semibold text-amber-950 transition group-hover:text-white">
                  {cat}
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ───────── Popular dishes ───────── */}
      <section className="px-6 py-16 md:px-[7%]">
        <Reveal className="mb-12 text-center">
          <p className="mb-2 font-bold tracking-widest text-orange-600">
            CUSTOMER FAVOURITES
          </p>
          <h2 className="text-3xl font-extrabold text-amber-950 sm:text-5xl">
            Popular Dishes
          </h2>
          <p className="mt-3 text-gray-600">
            A few favourites made just for you.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((food, i) => (
            <Reveal key={food.id} delay={(i % 3) * 120}>
              <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
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
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────── Why us ───────── */}
      <section className="px-6 pb-16 md:px-[7%]">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ["🥬", "Fresh Ingredients", "Picked daily from trusted local suppliers."],
            ["⚡", "Super Fast Delivery", "Hot food at your door in around 30 minutes."],
            ["👨‍🍳", "Expert Chefs", "Every dish cooked with love and care."],
          ].map(([icon, title, text], i) => (
            <Reveal key={title} delay={i * 150}>
              <div className="rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl">
                  {icon}
                </div>
                <h3 className="text-lg font-bold text-amber-950">{title}</h3>
                <p className="mt-2 text-gray-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


    </main>
  );
}

export default Home;