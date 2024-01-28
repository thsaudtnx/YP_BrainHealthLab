import React from 'react';
import styles from './login.module.css';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <div>
              <Image 
                src='/logo-white.png'
                alt='logo-white'
                width={50}
                height={50}
              />
            </div>
            <div className={styles.logoName}>YP 뇌교육연구소</div>
          </div>
          <div className={styles.description}>너 그리고 나와 함께하는 순간</div>
        </div>

        <div className={styles.methods}>
          <div className={styles.method}>
            <div className={styles.logo}>
              <Image 
                src='/Google-logo.png'
                alt='google'
                width={30}
                height={30}
              />
            </div>
            <div>구글로 시작하기</div>
            <div></div>
          </div>
          <div className={styles.method}>
            <div className={styles.logo}>
              <Image 
                src='/KakaoTalk-logo.png'
                alt='kakao'
                width={30}
                height={30}
              />
            </div>
            <div>카카오로 시작하기</div>
            <div></div>
          </div>
          <Link 
            className={styles.method}
            href='/login/phone'
          >
            <div className={styles.logo}>
              <Image 
                src='/phone-logo.png'
                alt='phone'
                width={30}
                height={30}
              />
            </div>
            <div>전화번호로 시작하기</div>
            <div></div>
          </Link>
          <Link 
            className={styles.method}
            href='/login/email'
          >
            <div className={styles.logo}>
              <Image 
                src='/email-logo.png'
                alt='email'
                width={30}
                height={30}
              />
            </div>
            <div>이메일로 시작하기</div>
            <div></div>
          </Link>
        </div>

        <div className={styles.words}>
          <div className={styles.wordsHeader}>
            <div className={styles.headerWord}>개인정보 처리방침</div>
            <div className={styles.headerWord}>이용약관</div>
          </div>
          <div className={styles.wordsDescription}>
            회원가입 시 YP 뇌교육연구소의 개인정보 처리방침과 이용양관에 동의하는 것으로 간주합니다.
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LoginPage;