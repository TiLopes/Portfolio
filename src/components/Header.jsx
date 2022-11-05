import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} width={100} className="logo"></img>
      <Navbar />
    </header>
  );
}
