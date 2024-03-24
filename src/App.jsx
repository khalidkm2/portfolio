import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
