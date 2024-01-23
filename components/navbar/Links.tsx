import React from 'react';
import NavLink from './NavLink';
import styles from './links.module.css';

const links = [
  {
    title : 'About',
    path : '/about',
  },
  {
    title : 'Contact',
    path : '/contact',
  },
  {
    title : 'Admin',
    path : '/admin',
  },
  {
    title : 'Login',
    path : '/login',
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