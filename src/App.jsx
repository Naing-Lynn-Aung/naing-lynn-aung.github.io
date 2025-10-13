import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollHandler from './components/ScrollHandler';
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <ScrollHandler />
    </>
  );
}

export default App;
