import * as React from 'react';
import styles from './Interests.module.scss';

export default function Interests() {
  return (
    <div className={styles.interests}>
      <h2>Interests</h2>
      <ul className={styles.options_container}>
          <li>I want to be matched:</li>
          <li><input type="checkbox" id="option1" /><label htmlFor="option1">by interests</label></li>
          <li><input type="checkbox" id="option2" /><label htmlFor="option2">when in office</label></li>
          <li><input type="checkbox" id="option3" /><label htmlFor="option3">with my team</label></li>
          <li><input type="checkbox" id="option4" /><label htmlFor="option4">company wide</label></li>
      </ul>
    </div>
  );
}
  