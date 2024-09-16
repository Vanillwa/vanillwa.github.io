import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../css/Header.module.css";
import { GoMoon, GoSun } from "react-icons/go";

function Header(props) {
  const { theme, setTheme } = props;
  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <Navbar expand='lg' className='bg-body-tertiary' data-bs-theme={theme} sticky='top'>
      <Container>
        <Navbar.Brand href='#home'>윤정현 - 포트폴리오</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>About Me</Nav.Link>
            <Nav.Link href='#link'>Activities</Nav.Link>
            <Nav.Link href='#link'>Technical Skills</Nav.Link>
            <Nav.Link href='#link'>Projects</Nav.Link>
            <Nav.Link href='#link'>Certifications</Nav.Link>
          </Nav>
          <button className={styles.themeBtn} onClick={handleThemeChange}>
            {theme === "dark" ? <GoMoon /> : <GoSun />}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
