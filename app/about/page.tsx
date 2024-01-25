import React from 'react';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>브랜드 소개</div>
        <div className={styles.description}>
          YP 뇌건강 연구소는 정신과 신체의 결합된 운동이 사람의 마음을 치유하고 삶을 변화시킨다는 믿음 아래 설립된 뇌 전문 교육기관입니다
        </div>
      </div>
      <div className={styles.background}>
        <div>
          저희는 정량뇌파 
          <span className={styles.word}>측정</span>, 
          <span className={styles.word}>분석</span>, 
          <span className={styles.word}>처방</span> 그리고 
          <span className={styles.word}>상담</span>까지 
        </div>
        <div>다양한 프로그램을 제공합니다</div>
      </div>
      <div className={styles.background}>
        <div>
          <div>뇌를 기반으로 한 감정코칭, 소통법, 뇌체조, 그림책 심리 프로그램</div>
          <div>노인분들을 위한 치매 및 우울 예방교실, 성공적인 노화 프로그램</div>
          <div>임산부를 위한 임산부 교실</div>
          <div>청소년을 위한 집중력 및 뉴로피드백, 직업체험 교육</div>
        </div>
        <div>남녀노소 누구나 참여 가능합니다</div>
      </div>
      <div className={styles.background}>
        <div>
          <span className={styles.word}>건강교육</span>및 
          <span className={styles.word}>집단 상담</span>
          등의 프로그램도 개발중입니다
        </div>
      </div>
    </div>
  );
};

export default AboutPage;