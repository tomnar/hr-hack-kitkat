import React from 'react';
import styles from './Main.module.scss';
import Options from './options/Options';

export default function Main() {
  return (
    <div className={styles.main}>
      <Options className={styles.options} />
    </div>
  );
}
