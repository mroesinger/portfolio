import { Link } from "react-scroll";

export default function Nav() {
  return (
    <div id="nav">
      <div id="logo">
        <p>Flat-Six Development</p>
      </div>
      <div id="button-container">
        <Link
          className="nav-button"
          to="home"
          spy={true}
          smooth={true}
          duration={700}
          offset={-100}
        >
          <p>Home</p>
        </Link>
        <Link
          className="nav-button"
          to="about-container"
          spy={true}
          smooth={true}
          duration={700}
          offset={-100}
        >
          <p>About</p>
        </Link>
        <Link
          className="nav-button"
          to="projects"
          spy={true}
          smooth={true}
          duration={700}
          offset={-100}
        >
          <p>Projects</p>
        </Link>
        <Link
          className="nav-button"
          to="contact"
          spy={true}
          smooth={true}
          duration={700}
          offset={-100}
        >
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}
