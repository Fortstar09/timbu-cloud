import { Routes, Route } from "react-router-dom";
import { Store } from "./pages/StorePage";
import { Cart } from "./pages/Cart";
import { Shipping } from "./pages/Shipping";
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
return (
  <ShoppingCartProvider>
  <Routes>
    <Route path="/" element={<Store />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/shipping" element={<Shipping />} />
  </Routes>
</ShoppingCartProvider >
);
}

export default App;
