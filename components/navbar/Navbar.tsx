'use client'

import React, { useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import Links from './Links';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import Dropbox from './Dropbox';

const Navbar = () => {

  const isTablet = useMediaQuery({
    query: "(max-width:992px)",
  });
  const [show, setShow] = useState(false);
  
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
        {isTablet ?
          <div className={styles.menubar}>
            <button onClick={() => setShow(!show)}>
              <Image
                className={styles.image}
                src='/menu-bar.png'
                alt='menu-bar'
                width={30}
                height={30}
              />
            </button>
            {show && <Dropbox setShow={setShow}/>}
          </div> 
        : <Links />}
      </div>
    </div>
  );
};

export default Navbar;