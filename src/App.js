import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search" element={<Contact />} />
        <Route path="/compare" element={<Projects />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;