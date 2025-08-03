import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
