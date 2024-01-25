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
    title : '고객지원',
    path : '/contact',
  },
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