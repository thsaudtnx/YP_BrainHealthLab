import React from "react";
import styles from "./modal.module.css";

interface ProfileData {
  name: string;
  image: string;
  birth: string;
  education: string[];
  experience: string[];
  certificate: string[];
  award: string[];
  activity: string[];
}

interface ProfileProps {
  profile: ProfileData;
}

const Modal = ({profile} : ProfileProps) => {
  return (
    <div className={styles.overlayStyle}>
      <div className={styles.modalStyle}>
        <div className={styles.left}>
          <div className={styles.image}>Image</div>
          <div className={styles.name}>{profile.name}</div>
          <div className={styles.position}>전임강사</div>
        </div>
        <div className={styles.right}>
          <div className={styles.content}>
            <div className={styles.title}>학력</div>
            <div className={styles.desciption}>
              {profile.education.map((edu, index) => (
                <div key={index}>
                  - {edu}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>경력사항&middot;수상내역</div>
            <div className={styles.desciption}>
              {profile.experience.map((ex, index) => (
                <div key={index}>
                  - {ex}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>자격사항</div>
            <div className={styles.desciption}>
              {profile.certificate.map((cer, index) => (
                <div key={index}>
                  - {cer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;