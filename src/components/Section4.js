import { Container } from "react-bootstrap";
import styles from "../css/Section4.module.css";
import image_rut from "../images/RUT.png";
import image_gng from "../images/Gang_and_Go.png";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiJquery, SiMysql, SiOracle, SiSpring } from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { ModalPortal } from "./ModalPortal";

function Section4() {
  const [project, setProject] = useState(null);

  const items = [
    {
      image: image_rut,
      title: "R U T?",
      subtitle: "mbti 게시판 및 채팅 사이트",
      term: "2024/04/15 ~ 2024/06/01",
      skills: [<FaReact />, <FaNodeJs />, <SiMysql />],
      skillsText: ["React", "Node.js", "MySQL"],
      url: ["https://github.com/Vanillwa/mbti-node", "https://github.com/Vanillwa/mbti-react"],
      member: "본인 외 3명",
      diff: `1. CORS 문제를 해결하기 위해 HTTPS 서버를 구축해서 프론트와 서버의 API 통신을 유도했지만 완벽하게 해결되지 않았습니다.

2. 후일의 프로젝트에선 프로젝트 완성 후 배포하는 과정에 있어서 도메인도 구매하고 SSL 인증서를 발급 받아 완벽한 HTTPS 서버를 만들어 보고 싶습니다.

3. 웹 소켓을 사용해서 1대 1 실시간 채팅을 구현해보았습니다. 이후에 1대 1 뿐만이 아니라 3명 이상이 한번에 채팅이 가능한 그룹 채팅 방도 구현을 해보고 싶습니다.

4. 얼마나 많은 사용자가 이번에 제작한 웹 서비스를 동시에 이용할 수 있는지 부하 테스트도 진행해보고 싶은 목표가 생겼습니다.

두 번째 팀 프로젝트 또한 팀장으로 진행을 하게 되었습니다. 팀원들의 실력을 파악하고 적절하게 업무를 할당하니 프로젝트가 차질 없이 기한 내에 완성될 수 있었던 것 같습니다.
이번 프로젝트를 통해 어떻게 개발자들이 협업을 하고 소통을 하는지 알 수 있었고 또 다른 프로젝트를 진행하게 될 때 좀 더 수월하게 진행할 수 있게 되었습니다.`,
      pdf: "/pdf/RUT.pdf",
    },
    {
      image: image_gng,
      title: "나의 펫이 되어줄래 ?",
      subtitle: "반려동물 게시판 및 쇼핑몰 사이트",
      term: "2023/11/27 ~ 2023/12/18",
      skills: [<SiSpring />, <SiJquery />, <SiOracle />],
      skillsText: ["Spring", "JQuery", "OracleDB"],
      url: ["https://github.com/Vanillwa/Gang_and_Go"],
      member: "본인 외 3명",
      diff: `무한 대댓글 기능을 구현하기 위해 DB 설계부터 시작했지만 원하는 모델을 얻기가 정말 어려웠습니다. 

단순히 댓글에 대댓글을 작성하는 기능은 구현하기 쉬웠지만, 대댓글의 대댓글을 작성하기 시작하면서 부터 댓글 리스트의 정렬 순서가 기존의 사용하던 로직으로는 올바르게 배치가 불가능 했습니다.

기존 댓글 테이블의 컬럼은 ref (참조하는 최상위 부모 댓글), depth (들여쓰기 깊이), step (한 댓글 그룹내의 순서 )으로 이루어져 있었습니다. 하지만 이러한 구조는 무한 대댓글 구조를 표현하기에 문제가 있었고 대댓글을 작성할 때 엉뚱한 댓글에 대댓글이 달리고 정렬이 역순으로 되는 등 문제점이 발생했습니다.

이러한 문제를 해결하기 위해 테이블에 두 가지의 컬럼을 추가했습니다.
기존 컬럼에 더해 nested (해당 댓글이 가지고 있는 자식 댓글의 수), parent (최상위 댓글이 아닌 바로 직속 부모 댓글) 컬럼을 추가하여 무한 대댓글을 구현할 수 있었습니다.`,
      pdf: "/pdf/GnG.pdf",
    },
  ];

  const [show, setShow] = useState(false);

  const handleShowModal = (item) => {
    setProject(item);
    document.body.style.overflow = "hidden";
    setShow(true);
  };
  const handleCloseModal = () => {
    document.body.style.overflow = "";
    setShow(false);
  };

  return (
    <>
      <section className={styles.sec}>
        <Container className={styles.container}>
          <div className={styles.title}>Projects</div>
          <div className={styles.itemList}>
            {items.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  className={styles.item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
                  viewport={{ amount: 0.8, once: true }}
                  whileHover={{ scale: 0.98, transition: { type: "tween", duration: 0.1 } }}
                  onClick={() => {
                    handleShowModal(item);
                  }}>
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
          {show && (
            <ModalPortal>
              <ProjectModal handleCloseModal={handleCloseModal} project={project} />
            </ModalPortal>
          )}
        </Container>
      </section>
    </>
  );
}

export default Section4;
