import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Project from "./components/Project/Project";
import MobileOverlay from "./components/MobileOverlay/MobileOverlay";
import Scrollbar from "./components/Scrollbar/Scrollbar";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import { Language } from "./types"; // Import the Language type
import "./App.css";

function App() {
  const [language, setLanguage] = useState<Language>("en");

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <LanguageSwitcher language={language} onChangeLanguage={changeLanguage} />
      <MobileOverlay />
      <Scrollbar />
      <Card language={language} />
      <Intro language={language} />
      <AboutMe language={language} />
      <Project language={language} />
    </>
  );
}

export default App;
