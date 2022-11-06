import "./App.css";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Greetings />
      <Experience />
      <About />
      <Projects />
    </div>
  );
}

export default App;
