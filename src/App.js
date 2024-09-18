import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Section1 from "./components/Section1";
import Navi from "./components/Navi";
import Section2 from "./components/Section2";
import { motion, useScroll } from "framer-motion";
import "./css/App.css";

function App() {
  const [theme, setTheme] = useState(localStorage.theme);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    if (localStorage.theme === "dark") document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
      <div className='bg'></div>
      <Navi theme={theme} setTheme={setTheme} />
      <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
      <Section1 />
      <Section2 />
    </>
  );
}

export default App;
