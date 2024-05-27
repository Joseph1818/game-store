import "./App.css";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <section className="home">
        <Navbar />
        <Home />
        <Footer />
      </section>
      <section className="game-list"></section>
    </div>
  );
}

export default App;
