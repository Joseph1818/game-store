import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/aboutUs";
import OtherAccessories from "./pages/otherAccesores";
import LoginSignup from "./components/LoginSignup";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/otherAccessories" element={<OtherAccessories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
