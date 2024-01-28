'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import styles from './forgot.module.css';

const ForgotPage = () => {

  const [email, setEmail] = useState('');
  const submitHandle = () => {
    if (email === ''){
      window.alert('이메일을 입력해주세요');
    } else {
      // Validate email using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)){
        //보내기
      } else {
        window.alert('올바른 이메일 형식을 작성해주세요')
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <button onClick={() => window.history.back()}>
              <Image 
                src='/back.png'
                alt='back'
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className={styles.title}>
            비밀번호 찾기
          </div>
          <div></div>
        </div>
        <div className={styles.body}>
          <div className={styles.words}>
            연동된 이메일로 임시 비밀번호를 보내드립니다.
          </div>
          <div className={styles.section}>
            <input 
              type="email" 
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='이메일을 입력해주세요'
            />
            <div>
              <button onClick={() => setEmail('')}>
                <Image
                  src='/cancel.png'
                  alt='cancel'
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button 
            className={styles.button}
            onClick={submitHandle}
          >
            보내기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;