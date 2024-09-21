import styles from "../css/Section1.module.css";
import { motion } from "framer-motion";
import { LuTextCursor } from "react-icons/lu";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
function Section1() {
  return (
    <section className={styles.sec}>
      <div className={styles.welcome}>
        <TypeAnimation sequence={["개발자 윤정현의 포트폴리오입니다"]} />
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
        <motion.div animate={{ y: ["0%", "5%", "0%"] }} transition={{ repeat: Infinity, duration: 1, delay: 1.3 }}>
          <MdKeyboardDoubleArrowDown className={styles.arrowdown} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Section1;
