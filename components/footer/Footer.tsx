import React from 'react';
import styles from './footer.module.css';
import Contents from './Contents';

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>
        주식회사 YP뇌건강연구소
      </h1>
      <div className={styles.contents}>
        <Contents />
      </div>
      <div className={styles.copyright}>
        Copyright (C) 주식회사 YP뇌건강연구소 All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;