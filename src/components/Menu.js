import { GoMoon, GoSun } from "react-icons/go";
import styles from "../css/Menu.module.css";
import { useThemeContext } from "../contexts/ThemeContext";

function Menu({ sec1Ref, sec2Ref, sec3Ref, sec4Ref, sec5Ref }) {
  const { theme, setTheme } = useThemeContext();
  const handleThemeChange = (e) => {
    e.stopPropagation();
    if (theme === "light") {
      setTheme(null);
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("light");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.add("light");
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
          <li onClick={() => handleClickMenu(sec4Ref)}>Projects</li>
          <li onClick={() => handleClickMenu(sec5Ref)}>Contact Me</li>
          <li>
            <button className={styles.themeBtn} onClick={handleThemeChange}>
              {theme === "light" ? <GoSun /> : <GoMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
