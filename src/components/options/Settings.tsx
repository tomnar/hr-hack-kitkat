import * as React from 'react';
import styles from './Settings.module.scss';
import { set, get } from 'local-storage'

export default function Settings() {
  const [reminders, setReminders] = React.useState(1);
  React.useEffect(() => {
    setReminders(get('reminders') || 1);
  }, [setReminders]);
  React.useEffect(() => {
    set('reminders', reminders);
  }, [reminders]);

  const [times, setTimes] = React.useState(1);
  React.useEffect(() => {
    setTimes(get('times') || 1);
  }, [setTimes]);
  React.useEffect(() => {
    set('times', times);
  }, [times]);

  return (
    <div className={styles.settings}>
      <h2>Settings</h2>
      <div>Reminders</div>
      <div className={styles.reminders}>
        <div className={styles.option}>
          <label htmlFor="reminders1">Daily</label>
          <input type="checkbox" id="reminders1" checked={reminders === 1} onChange={() => setReminders(1)}/>
        </div>
        <div className={styles.option}>
          <label htmlFor="reminders2">Weekly</label>
          <input type="checkbox" id="reminders2" checked={reminders === 2} onChange={() => setReminders(2)}/>
        </div>
      </div>
      <div>Preferred times</div>
      <div className={styles.times}>
        <div className={styles.option}>
          <label htmlFor="times1">8 - 12</label>
          <input type="checkbox" id="times1" checked={times === 1} onChange={() => setTimes(1)}/>
        </div>
        <div className={styles.option}>
          <label htmlFor="times2">14 - 18</label>
          <input type="checkbox" id="times2" checked={times === 2} onChange={() => setTimes(2)}/>
        </div>
      </div>
    </div>
  );
}