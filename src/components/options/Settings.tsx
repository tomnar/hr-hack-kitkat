import * as React from 'react';
import styles from './Settings.module.scss';

export default function Settings() {
  return (
    <div className={styles.settings}>
      <h2>Settings</h2>
      <div>Reminders</div>
      <div className={styles.reminders}>
        <div className={styles.option}>
          <label htmlFor="settings1">Daily</label>
          <input type="checkbox" id="settings1" />
        </div>
        <div className={styles.option}>
          <label htmlFor="settings2">Weekly</label>
          <input type="checkbox" id="settings2" />
        </div>
      </div>
      <div>Preferred times</div>
      <div className={styles.reminders}>
        <div className={styles.option}>
          <label htmlFor="settings3">8 - 12</label>
          <input type="checkbox" id="settings3" />
        </div>
        <div className={styles.option}>
          <label htmlFor="settings4">14 - 18</label>
          <input type="checkbox" id="settings4" />
        </div>
      </div>
    </div>
  );
}