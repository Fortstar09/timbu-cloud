import { Routes, Route } from "react-router-dom";
import { Store } from "./pages/StorePage";
import { Cart } from "./pages/Cart";
import { Shipping } from "./pages/Shipping";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
    </>
  );
}

export default App;
