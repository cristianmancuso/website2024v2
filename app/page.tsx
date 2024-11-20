"use client";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import "./styles/loader.css"; 
import Logo from "./components/Logo";
import Contacto from "./components/Contacto";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Video from "./components/Video"


export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Skills/>
      <Education/>
      <About />
      <Logo />
      <Video/>
      <Contacto />
    </div>
  );
}
