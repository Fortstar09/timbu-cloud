import "../components/style/store.css";
import "../components/style/shipping.css";
import Navbars from "../components/Navbars";
import Footer from "../components/Footer";

export function Shipping() {
  return (
    <>
      <Navbars />
      <div className="section">
        <div className="category">
          <div
            className="cat-name"
            style={{ fontWeight: 500, color: "#171A1D", fontSize: "14px" }}
          >
            <span>Cart</span>
            <img src="./img/arrow_icn_small.svg" alt="" />
            <span style={{ color: "#860920" }}>Shipping</span>
            <img src="./img/arrow_icn_small.svg" alt="" />
            <span>Payment</span>
            <img src="./img/arrow_icn_small.svg" alt="" />
          </div>
        </div>

        <div className="order-item-container">
          <div className="cart-summary order-summary">
            <h2>Order Summary</h2>
            <div className="cart-summary-item order-summary-item">
              <div className="cart-summary-item-price">
                <p>Items total cost</p>
                <p>$150</p>
              </div>
              <div className="cart-summary-item-price">
                <p>Delivery fees</p>
                <p>$40</p>
              </div>
              <div className="cart-summary-item-price">
                <p>Value added tax (VAT) </p>
                <p>$20</p>
              </div>
              <div className="cart-summary-item-price">
                <p>Discount</p>
                <p>$10</p>
              </div>
            </div>
            <div className="cart-total cart-summary-item-price">
              <p>Total</p>
              <p>$150</p>
            </div>
            <a href="" className="cart-dis-btn order-dis-btn">
              Proceed to payment
            </a>
          </div>
          <div>
            <div className="cartItems info">
              <div className="customer-info">
                <h3>Customer Information</h3>
              </div>
              <div className="customer-form">
                <div className="customer-input">
                  <p>First name</p>
                  <input type="text" placeholder="John" />
                </div>
                <div className="customer-input">
                  <p>Last name</p>
                  <input type="text" placeholder="John" />
                </div>
                <div className="customer-input country">
                  <p>Phone number</p>
                  <div className="country-flag">
                    <img src="/img/flag.png" style={{ width: "28px" }} alt="" />
                  </div>
                  <input type="tel" placeholder="+234 987 654 3210" />
                </div>
                <div className="customer-input">
                  <p>Email address</p>
                  <input type="email" placeholder="Johndoe@gmail.com" />
                </div>
              </div>
            </div>
            <div className="cartItems info">
              <div className="customer-info">
                <h3>Shipping Address:</h3>
              </div>
              <div className="shipping-form">
                <div className="flex-input1">
                  <div className="customer-input">
                    <p>Street address</p>
                    <input
                      type="text"
                      className="address"
                      placeholder="456 Elm Street, Apartment 789"
                    />
                  </div>
                  <div className="customer-input">
                    <p>Town</p>
                    <input type="text" placeholder="Cityville" />
                  </div>
                </div>
                <div className="flex-input2">
                  <div className="customer-input country">
                    <p>Country</p>
                    <div className="country-flag">
                      <img
                        src="/img/flag.png"
                        style={{ width: "28px" }}
                        alt=""
                      />
                    </div>
                    <input type="text" placeholder="Nigeria" />
                  </div>
                  <div className="customer-input">
                    <p>State</p>
                    <input type="text" placeholder="Lagos" />
                  </div>
                  <div className="customer-input">
                    <p>Postal code</p>
                    <input type="tel" placeholder="12345" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
