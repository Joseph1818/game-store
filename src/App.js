import "./App.css";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div>
      <section className="home">
        <Navbar />
        <div className="hero">
          <Home />
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default App;
