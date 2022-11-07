import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="z-10">
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="flex items-center navLinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li className="contact">
          <a href="#contact">
            <button>Contact me</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
