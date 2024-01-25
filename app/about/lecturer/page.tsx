import React from 'react';
import styles from './lecturer.module.css';
import Profiles from '@/components/body/about/profiles/Profiles';

const LecturerPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>전임강사진</div>
        <div className={styles.description}>
          파트타임 형태의 시간강사 제도가 아닌 주요학과에 전임강사진을 배치하여 교육의 완성도를 높이고 심도있는 교육이 진행됩니다
        </div>
      </div>
      <div className={styles.body}>
        <Profiles/>
      </div>
    </div>
  );
};

export default LecturerPage;