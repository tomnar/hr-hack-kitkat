import React from 'react';
import Interests from './Interests';
import Profile from './Profile';
import Settings from './Settings';
import styles from './Main.module.scss';

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Profile />
        <Interests />
        <Settings />
      </div>
    </div>
  );
}
