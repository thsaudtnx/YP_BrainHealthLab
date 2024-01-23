import React from 'react';
import styles from './contents.module.css';

const contents = [
  {
    title: "대표자",
    content : "추향임",
  },
  {
    title : "사업자등록번호",
    content : "473-87-02624",
  },
  {
    title : "의료서비스업 신고번호",
    content : "제 2023-경기도양평군-2583 호"
  },
  {
    title : "본점 소재지",
    content : "경기도 양평군 양서면 청원팰리스 103동 202호",
  },
  {
    title : "이메일",
    content : "messidona3589@gmail.com",
  },
];

const Contents = () => {
  return (
    <div>
      {contents.map(content => (
        <div className={styles.container} key={content.title}>
          <div className={styles.title}>{content.title}:</div>
          <div>{content.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Contents;