import { useEffect, useState } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [theme, setTheme] = useState(localStorage.theme);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <div>포트폴리오 올릴 예정</div>
    </>
  );
}

export default App;
