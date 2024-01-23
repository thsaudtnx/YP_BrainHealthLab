'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './navLink.module.css';

const NavLink = ({link} : any) => {
  const pathName = usePathname();

  return (
    <Link
      href={link.path}
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;