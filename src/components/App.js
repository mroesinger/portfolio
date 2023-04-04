import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Nav from "./Nav";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
