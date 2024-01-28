import React from 'react';
import styles from './about.module.css'
import Navbar from '@/components/body/about/navbar/Navbar';
import ImageSlider from '@/components/imageSlider/ImageSlider';

const Aboutlayout = ({children} : any) => {
  return (
    <div className={styles.container}>
      <div>
        <ImageSlider />
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