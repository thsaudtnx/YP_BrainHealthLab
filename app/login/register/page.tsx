'use client'

import React, { useState } from 'react';
import styles from './register.module.css';
import Image from 'next/image';
import Link from 'next/link';

const RegisterPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const submitHandle = () => {
    window.history.back();
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
            회원정보 입력
          </div>
          <div></div>
        </div>
        <div className={styles.body}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              이름
            </div>
            <div className={styles.sectionInput}>
              <input 
                type="text" 
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='홍길동'
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              전화번호
            </div>
            <div className={styles.sectionInput}>
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
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              이메일
            </div>
            <div className={styles.sectionInput}>
              <input 
                type="email" 
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='이메일을 입력하세요'
              />
              <div>
                <button 
                  onClick={() => {}}
                  className={styles.verify}>
                  인증
                </button>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              비밀번호
            </div>
            <div className={styles.sectionInput}>
              <input 
                type={show1 ? "text" : "password"} 
                className={styles.input}
                placeholder='비밀번호를 입력하세요'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <button onClick={() => setShow1(!show1)}>
                  {show1 ? (
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
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              비밀번호 확인
            </div>
            <div className={styles.sectionInput}>
              <input 
                type={show2 ? "text" : "password"} 
                className={styles.input}
                placeholder='비밀번호를 다시 입력해주세요'
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
              <div>
                <button onClick={() => setShow2(!show2)}>
                  {show2 ? (
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
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              나이
            </div>
            <div className={styles.sectionInput}>
              <select 
                className={styles.input} 
                value={age} 
                onChange={(e) => setAge(e.target.value)}
              >
                <option value="" selected disabled hidden>
                  선택해주세요
                </option>
                {Array.from({ length: 100 }, (_, index) => index+1)
                .map((number, index) => (
                  <option 
                    key={index} 
                    value={number}
                    className={styles.option}
                  >
                    {number}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              성별
            </div>
            <div className={styles.sectionInput}>
              <select 
                className={styles.input}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" selected disabled hidden>
                  선택해주세요
                </option>
                {[
                  {
                    label : '남자', 
                    value : 0
                  },
                  {
                    label : '여자',
                    value : 1,
                  },
                ].map((each, index) => (
                  <option key={index} value={each.value}>
                    {each.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button 
            className={styles.button}
            onClick={submitHandle}
          >
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;