import { Container } from "react-bootstrap";
import styles from "../css/Section5.module.css";
import { FaGithub } from "react-icons/fa";

function Section5() {
  return (
    <section className={styles.sec}>
      <Container className={styles.container}>
        <div className={styles.title}>Contact Me</div>
        <div className={styles.email}>yjh30448813@gmail.com</div>
        <a href='https://github.com/Vanillwa' target='_blank' rel='noreferrer noopener'>
          <FaGithub className={styles.githubIcon} />
        </a>
      </Container>
    </section>
  );
}

export default Section5;
