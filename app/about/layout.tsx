import Image from 'next/image';
import React from 'react';
import styles from './about.module.css'
import Navbar from '@/components/body/about/navbar/Navbar';

const Aboutlayout = ({children} : any) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div>Nurturing Minds,</div>
        <div>Transforming Lives</div>
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Aboutlayout;