
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-orange-50 px-6 py-12 md:px-[7%]">
      <h1 className="mb-8 text-center text-4xl font-bold text-amber-950">
        My Cart
      </h1>

      {cart.length === 0 ? (
        <div className="py-12 text-center">
          <p className="mb-6 text-gray-600">Your cart is empty.</p>
          <Link
            to="/menu"
            className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="mx-auto max-w-3xl space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-xl object-cover"
              />

              <div className="min-w-0 flex-1">
                <h2 className="font-bold text-amber-950">{item.name}</h2>
                <p className="text-orange-600">₹{item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                  className="rounded-lg bg-orange-100 px-3 py-1 disabled:opacity-40"
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="rounded-lg bg-orange-100 px-3 py-1"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm font-semibold text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-5 flex justify-between text-xl font-bold text-amber-950">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <Link
              to="/menu"
              className="inline-block rounded-full bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;
