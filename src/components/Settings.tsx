import * as React from 'react';
import styles from './Settings.module.scss';

export default function Settings() {
  return (
    <div className={styles.settings}>
      <h2>Settings</h2>
      <div>Reminders</div>
      <div className={styles.reminders}>
        <div className={styles.option}>
          <label htmlFor="option1">Daily</label>
          <input type="checkbox" name="option1" />
        </div>
        <div className={styles.option}>
          <label htmlFor="option2">Weekly</label>
          <input type="checkbox" name="option2" />
        </div>
      </div>
      <div>Preferred times</div>
      <div className={styles.reminders}>
        <div className={styles.option}>
          <label htmlFor="option3">8 - 12</label>
          <input type="checkbox" name="option3" />
        </div>
        <div className={styles.option}>
          <label htmlFor="option4">14 - 18</label>
          <input type="checkbox" name="option4" />
        </div>
      </div>
    </div>
  );
}