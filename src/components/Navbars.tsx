import "./style/navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext"

const Navbars = () => {

  const {cartQuantity } = useShoppingCart()
  return (
    <section className="nav">
      <NavLink to="/">
        <div className="logo">
          <img src="/img/logo.svg" alt="logo " />
        </div>
      </NavLink>
      <div className="others">
        <div className="form">
          <input
            type="text"
            placeholder="Search for clothes, bags, shoes, accessories"
          />
          <a href="#">
            <img src="/img/search-normal.svg" alt="" />
            <span>Search</span>
          </a>
        </div>
        <div className="nav-links">
          <div className="profile">
            <img src="/img/profile.svg" alt="" />
            <div className="name">
              <span className="hello">Hello</span>
              <span className="hel">Oshoke</span>
            </div>
          </div>
          <Link to="/Cart">
            <div className="cart">
              <span className="cart-tag">{cartQuantity}</span>
              <img src="/img/shopping-cart.svg" alt="" />
              <span className="cartt">Cart</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbars;
