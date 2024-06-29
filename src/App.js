import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Profile } from "./components/profile";
import { Projects } from "./components/Projects";

import { Footer } from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Profile />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
