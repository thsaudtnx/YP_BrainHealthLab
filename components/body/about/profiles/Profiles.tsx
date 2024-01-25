import React from 'react';
import Profile from './Profile';
import styles from './profiles.module.css';

const profiles = [
  {
    name : '추향임',
    image : '',
    birth : '1960.04.16',
    education : [
      '가천대학교 간호대학',
      '연세대학교 간호대학원',
      '국제뇌교육종합대학원'
    ],
    experience : [
      '전) 수원고려병원 간호과장',
      '전) 양평군 보건소 (보건진료소장)',
      '전) 연세대학교 간호대학원 임상강사',
      '현) 양평의료사협 의료분과장',
      '현) YP 뇌건강연구소 대표',
    ],
    certificate : [
      '보건교사 - 문교부',
      '간호사 - 보건복지부',
      '조산사 - 보건복지부',
      '정신전문산호사 - 보건복지부',
      '가정간호전문간호사 - 보건복지부',
      '치매케어 전문가 과정(1년) 이수 - 보건복지인력개발원',
      '브레인 트레이너 - 브레인트레이너 협회',
      '최면, 심리상담 전문교육과정 이수',
      '뇌건강체조지도사, 동화심리사 이수'
    ],
    award : [
      '경기도 도지사상',
      '양평군 수상',
      '보건복지부상',
      '행정안전부상'
    ],
    activity : [
      '자기조절프로그램이 고혈압환자의 혈압조절 및 자가간호 행위에 미치는 효과 – 석사학위 (2008. 2)',
      '노인의 스트레스 수준과 우울 및 심박변이도의 관계 – 뇌교육연구학술지 (2022. 11)',
      '노인의 전전두엽 및 후두엽 뇌파 지표와 주관적 기억감퇴, 우울과의 관계 – 박사학위 (2023. 2)',
      '보건진료소 ‘노년의 꿈’  프로그램 운영',
      '동화심리 교실 및 명상 (성애원)',
      '아로마와 그림책 심리 (예움도서관)',
      '호스피스 이해 (양평의료사협, 구리느티나무의원)',
      '뇌기반 감정코칭 (다남의원)',
      '뇌기반 치매 및 우울 예방교실 (문호, 정배교회)',
      '경기도교육지원청 주관 진로직업교육', 
    ]
  }
];

const Profiles = () => {
  return (
    <div className={styles.container}>
      {profiles.map((profile, index) => (
        <Profile key={index} profile={profile}/>
      ))}
      <Profile profile={profiles[0]}/>
      <Profile profile={profiles[0]}/>
      <Profile profile={profiles[0]}/>
      <Profile profile={profiles[0]}/>
      <Profile profile={profiles[0]}/>
      <Profile profile={profiles[0]}/>
      <Profile profile={profiles[0]}/>
    </div>
  );
};

export default Profiles;