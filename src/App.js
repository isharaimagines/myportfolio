import "./assets/testapp.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Expertices } from "./components/Expertices";
import { Projetcz } from "./components/Projetcz";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Expertices />
      <Projetcz />
      <Footer />
    </div>
  );
}

export default App;
