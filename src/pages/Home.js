import React from "react";
import About from "./About";
import Project from "./Projects";
import Contact from "./Contact";
import Work from "./Work";
import Footer from "../components/Footer/Footer";

function Home() {
  
    return (
      <>
        <About />
        <Project />
        <Work />
        <Contact />
        <Footer />
      </>
    );
}

export default Home;