'use client'

import React from 'react';
import Link from 'next/link';
import styles from './links.module.css';

const links = [
  {
    title : '연구소 소개',
    path : '/about',
  },
  {
    title : '교육과정',
    path : '/curriculum',
  },
];

const Links = () => {
  // Contact Button Handler
  const handleButtonClick = () => {
    const email = 'messidona3589@gmail.com';
    const mailtoUrl = `mailto:${email}`;
    window.location.href = mailtoUrl;
  };
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={styles.link}
        >
          {link.title}
        </Link>
      ))}
      <button 
        className={styles.link}
        onClick={handleButtonClick}>
        고객문의
      </button>
      <Link
        className={`${styles.link} ${styles.login}`}
        href='/login'
      >
        로그인
      </Link>
    </>
  );
};

export default Links;