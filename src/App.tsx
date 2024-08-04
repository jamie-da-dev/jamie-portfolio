import { useEffect } from "react";
import Card from "./components/Card/Card";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Project from "./components/Project/Project";
import MobileOverlay from "./components/MobileOverlay/MobileOverlay";
import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <MobileOverlay></MobileOverlay>
      <Card></Card>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Project></Project>
    </>
  );
}

export default App;