import { GoMoon, GoSun } from "react-icons/go";
import styles from "../css/Menu.module.css";
import { useThemeContext } from "../contexts/ThemeContext";

function Menu({ sec1Ref, sec2Ref, sec3Ref }) {
  const { theme, setTheme } = useThemeContext();
  const handleThemeChange = (e) => {
    e.stopPropagation();
    if (theme === "dark") {
      setTheme(null);
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  const handleClickMenu = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className={styles.menu}>
        <ul>
          <li onClick={() => handleClickMenu(sec1Ref)}>Home</li>
          <li onClick={() => handleClickMenu(sec2Ref)}>About Me</li>
          <li onClick={() => handleClickMenu(sec3Ref)}>Skills</li>
          <li>Projects</li>
          <li>
            <button className={styles.themeBtn} onClick={handleThemeChange}>
              {theme === "dark" ? <GoMoon /> : <GoSun />}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
