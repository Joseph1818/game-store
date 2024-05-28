import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/aboutUs";
import OtherAccessories from "./pages/otherAccesores";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/otherAccessories" element={<OtherAccessories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
