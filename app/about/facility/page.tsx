import React from 'react';
import styles from './facility.module.css';

const FacilityPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>교육시설 소개</div>
        <div className={styles.description}>
          <div>
            YP 뇌교육연구소는 전문적인 최신 시설의 강의장과 다양한 기구를 갖추고 있으며 수강생들이 자유롭게 이용 가능한 휴게실을 운영하고 있습니다
          </div> 
        </div>
      </div>
      <div className={styles.body}>
        
      </div>
    </div>
  );
};

export default FacilityPage;