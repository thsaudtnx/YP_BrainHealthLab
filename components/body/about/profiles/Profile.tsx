'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import styles from './profile.module.css';
import Modal from './Modal';

interface ProfileData {
  name: string;
  image: string;
  birth: string;
  education: string[];
  experience: string[];
  certificate: string[];
  award: string[];
  activity: string[];
}

interface ProfileProps {
  profile: ProfileData;
}

const Profile: React.FC<ProfileProps> = ({profile}) => {

  const [open, setOpen] = useState(false);

  return (
    <div 
      className={styles.container}
      onClick={() => setOpen(!open)}
    >
      <div className={styles.imageContainer}>
        Image
      </div>
      <div className={styles.description}>
        <div>
          <div className={styles.name}>{profile.name}</div>
          <div className={styles.position}>전임강사</div>
        </div>
        <div>
          <Image 
            src='/free-icon-add-button-117885.png' 
            alt="add-icon" 
            width={30}
            height={30}
          />
        </div>
      </div>

      {open && <Modal profile={profile}/>}
    </div>
  );
};

export default Profile;