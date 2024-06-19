import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/aboutUs";
import OtherAccessories from "./pages/otherAccesores";
import LoginSignup from "./components/LoginSignup";
import Cart from "./pages/Cart";
import Ps4Controller from "./pages/ps4Controller";
import Ps4Game from "./pages/ps4Game";
import Ps5Controller from "./pages/ps5Controller";
import Ps5Game from "./pages/ps5Game";

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
          <Route path="/ps4Controller" element={<Ps4Controller />} />
          <Route path="/ps4Game" element={<Ps4Game />} />
          <Route path="/ps5Controller" element={<Ps5Controller />} />
          <Route path="/ps5Game" element={<Ps5Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
