import React from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Links from './Links';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/" className={styles.logoContainer}>
          <Image 
            src="/YP-logo.png" 
            alt='Logo' 
            width={40}
            height={40}/>
          <div className={styles.logoName}>YP뇌건강연구소</div>
        </Link>
      </div>
      <div>
        <Links/>
      </div>
    </div>
  );
};

export default Navbar;