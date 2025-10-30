import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { CheckCircle } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const handlePlaceOrder = (item) => {
    setSelectedItem(item);
    setPaymentMethod("");
    const modal = new window.bootstrap.Modal(
      document.getElementById("orderModal")
    );
    modal.show();
  };

  const handleConfirmOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method before confirming.");
      return;
    }

    if (paymentMethod === "Card") {
      const { number, expiry, cvv } = cardDetails;
      if (!number || !expiry || !cvv) {
        alert("Please fill in all card details before confirming.");
        return;
      }
    }

    setOrderPlaced(true);

    setTimeout(() => {
      removeFromCart(selectedItem.id);
      setOrderPlaced(false);
      setSelectedItem(null);
      setPaymentMethod("");
      setCardDetails({ number: "", expiry: "", cvv: "" });
      const modal = window.bootstrap.Modal.getInstance(
        document.getElementById("orderModal")
      );
      modal.hide();
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #007bff, #6f42c1, #ff4d6d)",
          color: "#fff",
        }}
      >
        <div
          className="bg-white text-center p-5 rounded-4 shadow-lg"
          style={{ width: "90%", maxWidth: "420px" }}
        >
          <h3 className="fw-bold mb-3">🛒 Cart is Empty</h3>
          <p className="text-muted mb-0">Add some products to your cart!</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-start py-4"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #007bff, #6f42c1, #ff4d6d)",
        color: "#fff",
      }}
    >
      <div
        className="bg-white rounded-4 shadow-lg p-4"
        style={{ width: "90%", maxWidth: "520px", color: "#333" }}
      >
        <h3 className="text-center mb-4 fw-bold">🛍️ Your Cart</h3>

        {cart.map((item) => (
          <div
            key={item.id}
            className="border rounded-3 p-3 mb-3 shadow-sm bg-light"
          >
            <div className="d-flex align-items-center">
              <img
                src={item.image}
                alt={item.name}
                style={{
                  height: "80px",
                  width: "80px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  marginRight: "15px",
                }}
              />
              <div className="flex-grow-1">
                <h6 className="fw-bold mb-1">{item.name}</h6>
                <p className="mb-0 text-muted small">
                  ₹{item.price.toLocaleString("en-IN")} × {item.quantity}
                </p>
              </div>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
            <div className="text-end mt-2">
              <button
                className="btn btn-primary btn-sm rounded-pill fw-bold"
                onClick={() => handlePlaceOrder(item)}
              >
                Place Order
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      <div
        className="modal fade"
        id="orderModal"
        tabIndex="-1"
        aria-labelledby="orderModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 shadow-lg">
            {selectedItem && !orderPlaced && (
              <>
                <div className="modal-header bg-primary text-white">
                  <h5 className="modal-title fw-bold" id="orderModalLabel">
                    🧾 Order Summary
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setSelectedItem(null)}
                  ></button>
                </div>

                <div className="modal-body text-center">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    style={{
                      height: "100px",
                      width: "100px",
                      objectFit: "contain",
                      borderRadius: "10px",
                    }}
                  />
                  <h6 className="fw-bold mt-3">{selectedItem.name}</h6>
                  <p className="text-muted">
                    ₹{selectedItem.price.toLocaleString("en-IN")} ×{" "}
                    {selectedItem.quantity}
                  </p>
                  <h5 className="fw-bold text-success">
                    Total: ₹
                    {(
                      selectedItem.price * selectedItem.quantity
                    ).toLocaleString("en-IN")}
                  </h5>

                  {/* Payment Options */}
                  <div className="mt-4 text-start">
                    <h6 className="fw-bold mb-3 text-center">
                      Select Payment Method
                    </h6>

                    <div
                      className={`border rounded-3 p-3 mb-3 payment-option ${
                        paymentMethod === "UPI" ? "border-primary shadow" : ""
                      }`}
                      style={{
                        cursor: "pointer",
                        fontSize: "1rem",
                      }}
                      onClick={() => setPaymentMethod("UPI")}
                    >
                      💸 <strong>UPI / Net Banking</strong>
                    </div>

                    <div
                      className={`border rounded-3 p-3 mb-3 payment-option ${
                        paymentMethod === "Card" ? "border-primary shadow" : ""
                      }`}
                      style={{
                        cursor: "pointer",
                        fontSize: "1rem",
                      }}
                      onClick={() => setPaymentMethod("Card")}
                    >
                      💳 <strong>Credit / Debit Card</strong>

                      {paymentMethod === "Card" && (
                        <div className="mt-3">
                          <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Card Number"
                            value={cardDetails.number}
                            onChange={(e) =>
                              setCardDetails({
                                ...cardDetails,
                                number: e.target.value,
                              })
                            }
                          />
                          <div className="d-flex gap-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/YY"
                              value={cardDetails.expiry}
                              onChange={(e) =>
                                setCardDetails({
                                  ...cardDetails,
                                  expiry: e.target.value,
                                })
                              }
                            />
                            <input
                              type="password"
                              className="form-control"
                              placeholder="CVV"
                              value={cardDetails.cvv}
                              onChange={(e) =>
                                setCardDetails({
                                  ...cardDetails,
                                  cvv: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className={`border rounded-3 p-3 mb-3 payment-option ${
                        paymentMethod === "COD" ? "border-primary shadow" : ""
                      }`}
                      style={{
                        cursor: "pointer",
                        fontSize: "1rem",
                      }}
                      onClick={() => setPaymentMethod("COD")}
                    >
                      🚚 <strong>Cash on Delivery</strong>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    className="btn btn-success w-100 rounded-pill fw-bold py-2"
                    disabled={!paymentMethod}
                    onClick={handleConfirmOrder}
                  >
                    ✅ Confirm Order
                  </button>
                </div>
              </>
            )}

            {/* Success message inside modal */}
            {orderPlaced && (
              <div className="modal-body text-center py-5">
                <CheckCircle size={64} color="#28a745" className="mb-3" />
                <h4 className="fw-bold">Order Placed Successfully!</h4>
                <p>Payment Method: {paymentMethod}</p>
                <p>Thank you for shopping with TechCart 💙</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
