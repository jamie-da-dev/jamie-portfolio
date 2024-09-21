import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Project from "./components/Project/Project";
import Scrollbar from "./components/Scrollbar/Scrollbar";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import { Language } from "./types";
import "./App.css";

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <LanguageSwitcher language={language} onChangeLanguage={changeLanguage} />
      <Scrollbar />
      {!isMobile && <Card language={language} />}
      <Intro language={language} />
      <AboutMe language={language} />
      <Project language={language} />
    </>
  );
}

export default App;
