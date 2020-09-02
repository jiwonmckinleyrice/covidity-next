import React, { children } from 'react';
import styles from '../styles/Home.module.css';

export const Main = (props) => {
  if (props.currentState == 'good') {
    return (
      <main style={{ background: '#2d69ff' }} className={styles.main}>
        {props.children}
      </main>
    );
  } else if (props.currentState == 'okay') {
    return (
      <main style={{ background: '#42CC53' }} className={styles.main}>
        {props.children}
      </main>
    );
  } else if (props.currentState == 'bad') {
    return (
      <main style={{ background: '#FB8324' }} className={styles.main}>
        {props.children}
      </main>
    );
  } else if (props.currentState == 'extreme') {
    return (
      <main style={{ background: '#F0261F' }} className={styles.main}>
        {props.children}
      </main>
    );
  }
};
