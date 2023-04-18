import { Link } from "react-scroll";

export default function Nav() {
  return (
    <div id="nav">
      <div id="logo">
        <p>Roesinger Development</p>
      </div>
      <div id="button-container">
        <Link
          className="nav-button"
          to="home"
          spy={true}
          smooth={true}
          duration={700}
        >
          <p>Home</p>
        </Link>
        <Link
          className="nav-button"
          to="about"
          spy={true}
          smooth={true}
          duration={700}
        >
          <p>About</p>
        </Link>
        <Link
          className="nav-button"
          to="projects"
          spy={true}
          smooth={true}
          duration={700}
        >
          <p>Projects</p>
        </Link>
        <Link
          className="nav-button"
          to="contact"
          spy={true}
          smooth={true}
          duration={700}
        >
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}
