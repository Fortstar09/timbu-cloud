import "../components/style/store.css";
import "../components/style/cart.css";

export function Cart() {
  return (
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
            <span className="bold">Description:</span> Luxurious burgundy
            sneakers, adding elegance to any outfit.
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
  );
}
