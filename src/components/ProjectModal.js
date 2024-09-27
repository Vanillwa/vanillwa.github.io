import styles from "../css/ProjectModal.module.css";

function ProjectModal({ handleCloseModal }) {
  return (
    <div className={styles.modal}>
      <div className={styles.mask} onClick={handleCloseModal}></div>
      <div className={styles.modalBody}>
        <div className={styles.modalContent}>
          모달입니다.
          <button type='button' onClick={handleCloseModal}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
