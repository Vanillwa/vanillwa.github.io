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
    { icon: <FaJsSquare />, content: "JavaScript", bar: "100%" },
    { icon: <FaReact />, content: "React", bar: "100%" },
    { icon: <RiNextjsLine />, content: "Next.js", bar: "30%" },
    { icon: <SiSpring />, content: "Spring", bar: "100%" },
    { icon: <SiSpringboot />, content: "Spring Boot", bar: "100%" },
    { icon: <FaNodeJs />, content: "Node.js", bar: "100%" },
    { icon: <SiMysql />, content: "MySQL", bar: "100%" },
    { icon: <SiOracle />, content: "OracleDB", bar: "100%" },
    { icon: <SiMongodb />, content: "MongoDB", bar: "100%" },
    { icon: <BiLogoPostgresql />, content: "PostgreSQL", bar: "30%" },
    { icon: <FaGitAlt />, content: "Git", bar: "100%" },
    { icon: <FaFigma />, content: "Figma", bar: "30%" },
    { icon: <FaDocker />, content: "Docker", bar: "30%" },
    { icon: <FaAws />, content: "AWS", bar: "30%" },
    { icon: <SiMicrosoftazure />, content: "Azure", bar: "30%" },
  ];

  const barVar = {
    start: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        delayChildren: 0.1,
      },
    },
  };

  const proVar = {
    start: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <section className={styles.sec}>
      <Container fluid='lg' className={styles.container}>
        <div className={styles.title}>Skills</div>
        <div className={styles.itemList}>
          {icons.map((iconData, index) => (
            <motion.div key={index} className={styles.item} variants={barVar} initial='start' whileHover='hover'>
              <div className={styles.leftBox}>
                {iconData.icon}
                <div className={styles.name}>{iconData.content}</div>
              </div>
              <div className={styles.rightBox}>
                <motion.div className={styles.bar} initial={{ width: 0 }} whileInView={{ width: iconData.bar }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}>
                  <motion.span className={styles.proficiency} variants={proVar}>
                    {iconData.bar === "100%" ? "Familiar" : "Tried"}
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Section3;
