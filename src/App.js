import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/aboutUs";
import OtherAccessories from "./pages/otherAccesores";
import LoginSignup from "./components/LoginSignup";
import Cart from "./pages/Cart";
import ps4Game from "./pages/ps4Game";
import ps4Controller from "./pages/ps4Controller";
import ps5Game from "./pages/ps5Game";
import ps5Controller from "./pages/ps5Controller";

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
          <Route path="/ps4Game" element={<ps4Game />} />
          <Route path="/ps4Controller" element={<ps4Controller />} />
          <Route path="/ps5Game" element={<ps5Game />} />
          <Route path="/ps5Controller" element={<ps5Controller />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
