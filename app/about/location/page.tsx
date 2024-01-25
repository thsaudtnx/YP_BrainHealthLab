import React from 'react';
import styles from './location.module.css';

const LocationPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>위치 안내</div>
        <div className={styles.description}>
          <div>YP 뇌교육연구소는 양평점은 서울특별시 마포구 신촌로20 , 2층 거리에 위치하고 있습니다</div> 
        </div>
      </div>
      <div className={styles.body}>
        
      </div>
    </div>
  );
};

export default LocationPage;