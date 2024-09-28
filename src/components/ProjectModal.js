import { IoClose, IoPeopleSharp } from "react-icons/io5";
import styles from "../css/ProjectModal.module.css";
import { IoIosLink } from "react-icons/io";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { FaCalendarCheck, FaFileAlt, FaWrench } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

function ProjectModal({ handleCloseModal, project }) {
  return (
    <>
      <div className={styles.mask} onClick={handleCloseModal}></div>
      <div className={styles.modal}>
        <div className={styles.modalContainer}>
          <div className={styles.closeBtnWrapper}>
            <IoClose className={styles.closeBtn} onClick={handleCloseModal} />
          </div>
          <div className={styles.content}>
            <div className={styles.titleWrapper}>
              <div className={styles.title}>{project.title}</div>
              <div className={styles.subtitle}>{project.subtitle}</div>
            </div>
            <div className={styles.rowWrapper}>
              <div className={styles.row}>
                <div className={styles.rowHeader}>
                  <FaCalendarCheck />
                  <span>기간</span>
                </div>
                <div className={styles.rowContent}>{project.term}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.rowHeader}>
                  <IoPeopleSharp />
                  <span>인원</span>
                </div>
                <div className={styles.rowContent}>{project.member}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.rowHeader}>
                  <HiWrenchScrewdriver />
                  <span>기술 스택</span>
                </div>
                <div className={styles.rowContent}>
                  {project.skillsText.map((el, index) => {
                    return <span key={index}>{el}</span>;
                  })}
                </div>
              </div>
              {project.url.map((el, index) => {
                return (
                  <div key={index} className={styles.row}>
                    <div className={styles.rowHeader}>
                      <IoIosLink />
                      <span>URL{index + 1}</span>
                    </div>
                    <div className={styles.rowContent}>
                      <a href={el} target='_blank' rel='noreferrer noopener'>
                        {el}
                        <MdOpenInNew />
                      </a>
                    </div>
                  </div>
                );
              })}
              <div className={styles.row}>
                <div className={styles.rowHeader}>
                  <FaFileAlt />
                  <span>상세 설명</span>
                </div>
                <div className={styles.rowContent}>
                  <a href={project.pdf} target='_blank' rel='noopener noreferrer'>
                    PDF 파일 보기
                    <MdOpenInNew />
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div className={styles.comment}>
              <div className={styles.commentTitle}>
                <FaWrench />
                <span>어려웠던 점</span>
              </div>
              <pre className={styles.commentContent}>{project.diff}</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectModal;
