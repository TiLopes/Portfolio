import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="max-md:hidden">
      <ul className="flex-1 navLinks">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="#contact">
            <button>Contact me</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
