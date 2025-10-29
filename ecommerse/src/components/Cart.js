import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return <h3 className="text-center my-5">🛒 Your cart is empty!</h3>;
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      <div className="row">
        {cart.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top p-3"
                style={{ height: "250px", objectFit: "contain" }}
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">{item.name}</h5>
                <p>₹{item.price.toLocaleString("en-IN")}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <h4>Total: ₹{totalPrice.toLocaleString("en-IN")}</h4>
      </div>
    </div>
  );
}

export default Cart;
