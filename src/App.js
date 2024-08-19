import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/aboutUs";
import OtherAccessories from "./pages/otherAccesores";
import LoginSignup from "./components/LoginSignup";
import Cart from "./pages/Cart";
import Ps4Controller from "./pages/ps4Controller";
import Ps4Game from "./pages/ps4Game";
import Ps5Controller from "./pages/ps5Controller";
import Ps5Game from "./pages/ps5Game";
import Header from "./components/header";
import Footer from "./components/footer";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home title="" />} />
          <Route path="/Ps5" element={<Ps5Game />} />
          <Route path="/Ps4" element={<Ps4Game />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<LoginSignup />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
