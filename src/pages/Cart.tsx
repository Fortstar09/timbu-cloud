import "../components/style/store.css";
import "../components/style/cart.css";
import Navbars from "../components/Navbars";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export function Cart() {
  return (
    <>
      <Navbars />
      <div className="section">
        <div className="category">
          <div
            className="cat-name"
            style={{ fontWeight: 500, color: "#171A1D", fontSize: "14px" }}
          >
            <span style={{ color: "#860920" }}>Cart</span>
            <img src="/img/arrow_icn_small.svg" alt="" />
            <span>Shipping</span>
            <img src="./img/arrow_icn_small.svg" alt="" />
            <span>Payment</span>
            <img src="./img/arrow_icn_small.svg" alt="" />
          </div>
        </div>

        <div className="cart-item-container">
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <div className="cart-summary-item">
              <div className="cart-summary-item-price">
                <p>
                  <span>x2</span>Classic Retro
                </p>
                <p>$40</p>
              </div>
              <div className="cart-summary-item-price">
                <p>
                  <span>x2</span>Sage green
                </p>
                <p>$40</p>
              </div>
              <div className="cart-summary-item-price">
                <p>
                  <span>x2</span>Classic Retro
                </p>
                <p>$40</p>
              </div>
              <div className="cart-summary-item-price">
                <p>
                  <span>x1</span>Sage green
                </p>
                <p>$40</p>
              </div>
            </div>
            <div className="cart-discount cart-summary-item-price">
              <p>Discount</p>
              <p>$10</p>
            </div>
            <div className="cart-total cart-summary-item-price">
              <p>Total</p>
              <p>$150</p>
            </div>
            <div className="cart-dis-input">
              <input type="text" placeholder="Add discount code here" />
              <img src="/img/discount.svg" alt="" />
            </div>
            <Link to="/shipping" className="cart-dis-btn">Checkout</Link>
          </div>
          <div>
            <div className="cartItems">
              <div className="cartItems-img">
                <img src="./img/item1.png" alt="" />
              </div>
              <div className="cartItems-info">
                <div className="item-name">
                  <h3>Earthy brown</h3>
                  <h2>$129</h2>
                </div>
                <div className="item-descript">
                  <p>
                    <span className="bold">Description:</span> Luxurious
                    burgundy sneakers, adding elegance to any outfit.
                  </p>
                </div>
                <div className="item-quantity">
                  <span className="bold">Quantity:</span>
                  <div className="quantity-container">
                    <img src="./img/minus-sign.svg" alt="" />
                    <span className="quantity">2</span>
                    <img src="./img/plus-sign.svg" alt="" />
                  </div>
                </div>
                <div className="coll">
                  <div className="item-color">
                    <p>
                      <span className="bold">Colour:</span> Brown
                    </p>
                  </div>
                  <div className="item-size">
                    <p>
                      <span className="bold">Size:</span> XXL
                    </p>
                  </div>
                </div>
                <div className="item-btn">
                  <button className="fav-btn">
                    <img src="./img/heart-brown.svg" alt="" />
                    <span className="remove">Add to favourites</span>
                  </button>
                  <button className="remove-btn">
                    <img src="./img/archive.svg" alt="" />
                    <span>Remove from cart</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="cartItems">
              <div className="cartItems-img">
                <img src="./img/item2.png" alt="" />
              </div>
              <div className="cartItems-info">
                <div className="item-name">
                  <h3>Item Name</h3>
                  <h2>$129</h2>
                </div>
                <div className="item-descript">
                  <p>
                    <span className="bold">Description:</span> Luxurious
                    burgundy sneakers, adding elegance to any outfit.
                  </p>
                </div>
                <div className="item-quantity">
                  <span className="bold">Quantity:</span>
                  <div className="quantity-container">
                    <img src="./img/minus-sign.svg" alt="" />
                    <span className="quantity">1</span>
                    <img src="./img/plus-sign.svg" alt="" />
                  </div>
                </div>
                <div className="item-color">
                  <p>
                    <span className="bold">Colour:</span> Brown
                  </p>
                </div>
                <div className="item-size">
                  <p>
                    <span className="bold">Size:</span> XXL
                  </p>
                </div>
                <div className="item-btn">
                  <button className="fav-btn">
                    <img src="./img/heart-brown.svg" alt="" />
                    <span>Add to favourites</span>
                  </button>
                  <button className="remove-btn">
                    <img src="./img/archive.svg" alt="" />
                    <span>Remove from cart</span>
                  </button>
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
