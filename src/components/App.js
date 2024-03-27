import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Nav from "./Nav";
import Projects from "./Projects";
import Automotive from "./Automotive";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Automotive />
      <Contact />
    </div>
  );
}

export default App;
