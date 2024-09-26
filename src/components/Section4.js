import { Container } from "react-bootstrap";
import styles from "../css/Section4.module.css";
import image_rut from "../images/RUT.png";
import image_gng from "../images/Gang_and_Go.png";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJquery, SiMysql, SiOracle, SiSpring } from "react-icons/si";
import { motion } from "framer-motion";

function Section4() {
  const items = [
    {
      image: image_rut,
      title: "R U T?",
      subtitle: "mbti 게시판 및 채팅 사이트",
      term: "2024/04/15 ~ 2024/06/01",
      skills: [<FaReact />, <FaNodeJs />, <SiMysql />],
      url: ["https://github.com/Vanillwa/mbti-node", "https://github.com/Vanillwa/mbti-react"],
    },
    {
      image: image_gng,
      title: "나의 펫이 되어줄래 ?",
      subtitle: "반려동물 게시판 및 쇼핑몰 사이트",
      term: "2023/11/27 ~ 2023/12/18",
      skills: [<SiSpring />, <SiJquery />, <SiOracle />],
      url: ["https://github.com/Vanillwa/Gang_and_Go"],
    },
  ];
  return (
    <>
      <section className={styles.sec}>
        <Container className={styles.container}>
          <div className={styles.title}>Projects</div>
          <div className={styles.itemList}>
            {items.map((item, index) => {
              return (
                <motion.div key={index} className={styles.item} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }} viewport={{ amount: 0.8, once: true }}>
                  <div className={styles.imageBox} style={{ backgroundImage: `url(${item.image})` }}></div>
                  <div className={styles.contentBox}>
                    <div className={styles.itemTitle}>{item.title}</div>
                    <div className={styles.itemSubtitle}>{item.subtitle}</div>
                    <div className={styles.itemTerm}>{item.term}</div>
                    <div className={styles.bottomGroup}>
                      <div className={styles.itemSkills}>
                        {item.skills.map((skill, index) => {
                          return <div key={index}>{skill}</div>;
                        })}
                      </div>
                      <div className={styles.github}>
                        {item.url.map((url, index) => {
                          return (
                            <a key={index} href={url} target='_blank' rel='noreferrer noopener'>
                              <FaGithub />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Section4;
