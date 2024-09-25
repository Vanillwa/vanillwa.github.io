import styles from "../css/Section2.module.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

function Section2() {
  return (
    <section className={styles.sec}>
      <Container fluid='lg' className={styles.container}>
        <div className={styles.leftBox}>About Me</div>
        <motion.div className={styles.rightBox} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 1, once: true }} transition={{ duration: 1, delay: 0.2 }}>
          <div className={styles.slogan}>세상을 변화시키는 SW를 만들고 싶은 개발자</div>
          <div className={styles.content}>
            초등학생 때 스크래치, 중학생 때 C언어를 경험하며 프로그래밍에 관심이 높아져 IT 특성화 고등학교에 진학하며 웹 개발자의 꿈을 키웠습니다.
            <br /> 모르는 것이 존재하면 끝까지 알아내 해결하고 싶어합니다.
            <br /> 협업 할 때 팀원과 소통하는 것을 중요시 여기는 구성원입니다.
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Section2;
