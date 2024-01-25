import React from 'react';
import styles from './about.module.css'
import Navbar from '@/components/body/about/navbar/Navbar';

const Aboutlayout = ({children} : any) => {
  return (
    <div className={styles.container}>
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