
import { Link } from "react-router-dom";
import foods from "../data/foods";

function Home() {
  return (
    <main className="bg-orange-50">
      {/* Hero section */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center gap-10 px-6 py-16 md:flex-row md:px-[7%]">
        <div className="max-w-xl text-center md:text-left">
          <p className="mb-4 font-bold tracking-widest text-orange-600">
            FRESH · TASTY · DELICIOUS
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-amber-950 sm:text-5xl lg:text-6xl">
            Delicious Food,
            <span className="text-orange-600"> Delivered Fresh.</span>
          </h1>

          <p className="mb-8 text-lg leading-8 text-gray-600">
            Enjoy your favourite meals, freshly prepared and delivered
            right to your doorstep.
          </p>

          <Link
            to="/menu"
            className="inline-block rounded-full bg-orange-600 px-8 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            Explore Our Menu →
          </Link>
        </div>

        <div className="flex w-full max-w-md items-center justify-center">
          <img
            src={foods[0].image}
            alt="Delicious food from Foodie"
            className="h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96"
          />
        </div>
      </section>

      {/* Popular food section */}
      <section className="px-6 py-16 md:px-[7%]">
        <div className="mb-10 text-center">
          <p className="mb-2 font-bold tracking-widest text-orange-600">
            CUSTOMER FAVOURITES
          </p>

          <h2 className="text-3xl font-bold text-amber-950 sm:text-4xl">
            Popular Dishes
          </h2>

          <p className="mt-3 text-gray-600">
            A few favourites made just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((food) => (
            <div
              key={food.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={food.image}
                alt={food.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <p className="mb-2 text-sm text-orange-600">
                  {food.category}
                </p>

                <h3 className="text-xl font-bold text-amber-950">
                  {food.name}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-bold text-orange-600">
                    ₹{food.price}
                  </p>

                  <Link
                    to="/menu"
                    className="rounded-full bg-orange-100 px-4 py-2 font-semibold text-orange-700 transition hover:bg-orange-200"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-orange-600 px-6 py-14 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Hungry already?
        </h2>

        <p className="mb-7 text-orange-50">
          Find your next favourite dish today.
        </p>

        <Link
          to="/menu"
          className="inline-block rounded-full bg-white px-8 py-3 font-bold text-orange-700 transition hover:bg-orange-50"
        >
          Order Now
        </Link>
      </section>
    </main>
  );
}

export default Home;
