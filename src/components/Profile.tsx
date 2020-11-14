import * as React from 'react';
import styles from './Profile.module.scss';

export default function Profile() {
  return (
    <div className={styles.profile}>
      <h2>Profile</h2>
      <img alt="profile" className={styles.image} src="https://picsum.photos/200" />
      <ul className={styles.info_container}>
          <li><label>Location</label><span>Hamburg, Germany</span></li>
          <li><label>Position</label><span>Junior Developer</span></li>
          <li><label>Department</label><span>Hackathons</span></li>
      </ul>
    </div>
  );
}