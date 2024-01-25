'use client'

import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';

const links = [
  {
    title : '브랜드 소개',
    path : '/about',
  },
  {
    title : '강사진 소개',
    path : '/about/lecturer',
  },
  {
    title : '교육시설 소개',
    path : '/about/facility',
  },
  {
    title : '제휴 안내',
    path : '/about/collaboration',
  },
  {
    title : '위치 안내',
    path : '/about/location',
  }
];

const Navbar = () => {

  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <div 
            key={index} 
            className={`${styles.link} ${pathname === link.path && styles.linkActive}`}
          >
            <Link href={link.path}>{link.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;