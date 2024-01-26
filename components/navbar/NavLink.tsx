'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './navLink.module.css';

const NavLink = ({link} : any) => {
  const pathName = usePathname();

  // Contact Button Handler
  const handleButtonClick = () => {
    const email = 'messidona3589@gmail.com';
    const mailtoUrl = `mailto:${email}`;
    window.location.href = mailtoUrl;
  };

  return (
    <>
      {link.title === '고객문의' ? (
        <button 
          className={styles.container}
          onClick={handleButtonClick}>
          고객문의
        </button>
      ) : (
        <Link
          href={link.path}
          className={`${styles.container} ${
            pathName === link.path && styles.active
          }`}
        >
          {link.title}
        </Link>
      )}
    </>
  );
};

export default NavLink;