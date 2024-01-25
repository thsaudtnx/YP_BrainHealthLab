import React from 'react';
import NavLink from './NavLink';
import styles from './links.module.css';

const links = [
  {
    title : '연구소 소개',
    path : '/about',
  },
  {
    title : '교육과정',
    path : '/curriculum',
  },
  {
    title : '강사 양성과정',
    path : '/train',
  },
  {
    title : '창업과정',
    path : '/found'
  },
  {
    title : '고객문의',
    path : '/contact',
  }
];

const Links = () => {
  return (
    <div className={styles.container}>
      {links.map(link => (
        <NavLink 
          link={link}
          key={link.title}
        />
      ))}
    </div>
  );
};

export default Links;