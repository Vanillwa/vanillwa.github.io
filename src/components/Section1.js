import styles from "../css/Section1.module.css";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
function Section1({ sec2Ref }) {
  const handleClickArrow = () => {
    sec2Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={styles.sec}>
      <div className={styles.welcome}>
        <TypeAnimation sequence={["개발자 윤정현의 포트폴리오입니다"]} speed={20} />
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
        <motion.div whileInView={{ y: ["0%", "5%", "0%"] }} transition={{ repeat: Infinity, duration: 1 }}>
          <MdKeyboardDoubleArrowDown className={styles.downArrow} onClick={handleClickArrow} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Section1;
