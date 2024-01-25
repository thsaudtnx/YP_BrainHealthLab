'use client'

import React from 'react';
import styles from './imageSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import Image from 'next/image';

// Swiper Style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const images = [
  {
    title : 'Nurturing Minds, Transforming Lives',
    path : '/background1.jpg',
  },
  {
    title : 'Nurturing Minds, Transforming Lives',
    path : '/background2.jpg',
  },
  {
    title : 'Nurturing Minds, Transforming Lives',
    path : '/background1.jpg',
  },
  {
    title : 'Nurturing Minds, Transforming Lives',
    path : '/background2.jpg',
  },
];

const ImageSlider = () => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        loop={true}
      >
        {images.map((i, index) => (
          <SwiperSlide key={index}>
            <div className={styles.imageContainer}>
              <Image 
                src={i.path} 
                alt={i.title}
                width={1000}
                height={400}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
