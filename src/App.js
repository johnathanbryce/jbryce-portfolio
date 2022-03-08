import Navbar from "./components/Layout/Navbar";
import About from "./components/Layout/About";
import Projects from "./components/Layout/Projects";
import Skills from "./components/Layout/Skills";
import Contact from "./components/Layout/Contact";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <main>
      <Navbar />
      <div class="container">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}

export default App;
