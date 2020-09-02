import React from 'react';
import styles from '../styles/Home.module.css';

export const MainMessage = ({ currentState }) => {
  if (currentState == 'good') {
    return <div className={styles.title}>좋습니다!</div>;
  } else if (currentState == 'okay') {
    return <div className={styles.title}>보통입니다.</div>;
  } else if (currentState == 'bad') {
    return <div className={styles.title}>나쁩니다.</div>;
  } else if (currentState == 'extreme') {
    return <div className={styles.title}>매우 나쁩니다.</div>;
  }
};
