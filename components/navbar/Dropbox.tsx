import React from 'react';
import styles from './dropbox.module.css';
import Links from './Links';

const Dropbox = ({setShow} : any) => {
  return (
    <div className={styles.container} onClick={() => setShow(false)}>
      <Links />
    </div>
  );
};

export default Dropbox;