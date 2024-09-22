import { FaAws, FaDocker, FaFigma, FaGitAlt, FaJava, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import styles from "../css/Section3.module.css";
import { Container } from "react-bootstrap";
import { RiNextjsLine } from "react-icons/ri";
import { SiMicrosoftazure, SiMongodb, SiMysql, SiOracle, SiSpring, SiSpringboot } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

function Section3() {
  const icons = [
    { icon: <FaJava />, content: "Java", bar: "100%" },
    { icon: <FaJsSquare />, content: "JavaScript", bar: "10%" },
    { icon: <FaReact />, content: "React", bar: "10%" },
    { icon: <RiNextjsLine />, content: "Next.js", bar: "10%" },
    { icon: <SiSpring />, content: "Spring", bar: "10%" },
    { icon: <SiSpringboot />, content: "Spring Boot", bar: "10%" },
    { icon: <FaNodeJs />, content: "Node.js", bar: "10%" },
    { icon: <SiMysql />, content: "MySQL", bar: "10%" },
    { icon: <SiOracle />, content: "OracleDB", bar: "10%" },
    { icon: <SiMongodb />, content: "MongoDB", bar: "10%" },
    { icon: <BiLogoPostgresql />, content: "PostgreSQL", bar: "10%" },
    { icon: <FaGitAlt />, content: "Git", bar: "10%" },
    { icon: <FaFigma />, content: "Figma", bar: "10%" },
    { icon: <FaDocker />, content: "Docker", bar: "10%" },
    { icon: <FaAws />, content: "AWS", bar: "10%" },
    { icon: <SiMicrosoftazure />, content: "Azure", bar: "10%" },
  ];

  return (
    <section className={styles.sec}>
      <Container className={styles.container}>
        {icons.map((iconData, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.icon}>
              {iconData.icon}
              <div className={styles.name}>{iconData.content}</div>
            </div>
            <div className={styles.rightBox}>
              <motion.div className={styles.bar} initial={{ width: 0 }} whileInView={{ width: iconData.bar }} viewport={{ margin: "0%", once: true }} transition={{ duration: 1 }}></motion.div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}

export default Section3;
