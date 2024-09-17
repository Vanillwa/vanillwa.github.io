import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Section1 from "./components/Section1";
import Navi from "./components/Navi";
import Section2 from "./components/Section2";

function App() {
  const [theme, setTheme] = useState(localStorage.theme);
  useEffect(() => {
    if (localStorage.theme === "dark") document.documentElement.classList.add("dark");
  }, []);
  return (
    <>
      <Navi theme={theme} setTheme={setTheme} />
      <Section1 />

      <Section2 />
    </>
  );
}

export default App;
