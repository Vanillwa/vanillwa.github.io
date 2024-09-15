import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, ToggleButton } from "react-bootstrap";
import styles from "../css/Header.module.css";

function Header(props) {
  const { theme, setTheme } = props;
  const [checked, setChecked] = useState(false);
  const handleThemeChange = (e) => {
    setChecked(e.currentTarget.checked);
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
    <Navbar expand='lg' className='bg-body-tertiary' data-bs-theme={theme}>
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
          <ToggleButton id='toggle-check' type='checkbox' variant='outline-primary' checked={checked} value='1' onChange={(e) => handleThemeChange(e)}>
            {theme}
          </ToggleButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
