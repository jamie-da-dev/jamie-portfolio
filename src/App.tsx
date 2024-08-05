import { useEffect } from "react";
import Card from "./components/Card/Card";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Project from "./components/Project/Project";
import MobileOverlay from "./components/MobileOverlay/MobileOverlay";
import Scrollbar from "./components/Scrollbar/Scrollbar";
import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <MobileOverlay></MobileOverlay>
      <Scrollbar />
      <Card />
      <Intro />
      <AboutMe />
      <Project />
    </>
  );
}

export default App;
