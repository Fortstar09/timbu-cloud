import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
import "../components/style/store.css";
import Navbars from "../components/Navbars";
import Footer from "../components/Footer";

export function Store() {
  return (
    <>
      <Navbars />
      <div className="section">
        <div className="category">
          <div className="cat-name">
            <span>Clothing</span>
            <img src="./img/arrow_icn_small.svg" alt="" />
            <span>Shoes</span>
            <img src="./img/arrow_icn_small.svg" alt="" />
            <span>Sneakers</span>
            <img src="./img/arrow_icn_small.svg" alt="" />
          </div>
          <div className="filter">
              <img src="./img/sort.svg" alt="" />
              <img src="./img/sort-brown.svg" alt="" className="brown"/>
              <span>Filter <span className="fit">by:</span></span>
              <span className="low">Low to high</span>
          </div>
        </div>

        <div className="store-item-container">
          {storeItems.map((item) => (
            <div className="items-card " key={item.id}>
              <StoreItem {...item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}


