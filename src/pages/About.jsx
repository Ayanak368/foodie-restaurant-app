
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="min-h-screen bg-orange-50">
      {/* Hero section */}
      <section className="px-6 py-20 text-center">
        <p className="mb-3 text-sm font-bold tracking-widest text-orange-600">
          OUR STORY
        </p>

        <h1 className="mb-6 text-4xl font-extrabold text-amber-950 sm:text-5xl">
          About <span className="text-orange-600">Foodie</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600">
          We believe great food brings people together. Foodie is here
          to make discovering your favourite meals simple, enjoyable,
          and delicious.
        </p>
      </section>

      {/* Mission and vision */}
      <section className="grid grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 md:px-[7%]">
        <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-3xl">
            🎯
          </div>

          <h2 className="mb-4 text-2xl font-bold text-amber-950">
            Our Mission
          </h2>

          <p className="leading-7 text-gray-600">
            To make ordering food convenient and enjoyable by bringing
            delicious meals and a simple ordering experience together.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-3xl">
            ❤️
          </div>

          <h2 className="mb-4 text-2xl font-bold text-amber-950">
            Our Vision
          </h2>

          <p className="leading-7 text-gray-600">
            To become a favourite destination for people who love good
            food, quality service, and a delightful dining experience.
          </p>
        </div>
      </section>


    </main>
  );
}

export default About;
