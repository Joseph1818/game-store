import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <section className="home">
        <Navbar />
        <div className="">
          <Home />
        </div>
      </section>
      <section className="game-list">
      
      </section>
    </div>
  );
}

export default App;
