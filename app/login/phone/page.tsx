'use client'

import React, { useState } from 'react';
import styles from './phone.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PhonePage = () => {

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const submitHandle = () => {
    if (phone === ''){
      window.alert('전화번호를 입력해 주세요')
    } else if (password == ''){
      window.alert('비밀번호를 입력해 주세요')
    } else {
      //제출
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
            전화번호 로그인
          </div>
          <div></div>
        </div>
        <div className={styles.body}>
          <div className={styles.section}>
            <input 
              type="text" 
              className={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='전화번호 입력'
            />
            <div>
              <button onClick={() => setPhone('')}>
                <Image
                  src='/cancel.png'
                  alt='cancel'
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
          <div className={styles.section}>
            <input 
              type={show ? "text" : "password"} 
              className={styles.input}
              placeholder='비밀번호를 입력하세요'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <button onClick={() => setShow(!show)}>
                {show ? (
                  <Image
                  src='/hide.png'
                  alt='hide'
                  width={25}
                  height={25}
                />
                ) : (
                  <Image
                    src='/show.png'
                    alt='show'
                    width={25}
                    height={25}
                  />
                )}
              </button>
            </div>
          </div>
          <div className={styles.forgot}>
            <Link href='/login/forgot'>
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button 
            className={styles.button}
            onClick={submitHandle}
          >
            로그인
          </button>
          <div className={styles.register}>
            <Link href='/login/register'>
              아직 계정이 없으신가요? 
              <span className={styles.registerButton}>
                회원가입
              </span>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default PhonePage;