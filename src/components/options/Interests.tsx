import * as React from 'react';
import styles from './Interests.module.scss';
import { set, get } from 'local-storage'

export default function Interests() {
  const [interest1, setInterest1] = React.useState(false); 
  React.useEffect(() => {
    setInterest1(get('interest1') || false);
  }, [setInterest1]);
  React.useEffect(() => {
    set('interest1', interest1);
  }, [interest1]);
  
  const [interest2, setInterest2] = React.useState(false);
  React.useEffect(() => {
    setInterest2(get('interest2') || false);
  }, [setInterest2]);
  React.useEffect(() => {
    set('interest2', interest2);
  }, [interest2]);
  
  const [interest3, setInterest3] = React.useState(false);
  React.useEffect(() => {
    setInterest3(get('interest3') || false);
  }, [setInterest3]);
  React.useEffect(() => {
    set('interest3', interest3);
  }, [interest3]);
  
  const [interest4, setInterest4] = React.useState(false);
  React.useEffect(() => {
    setInterest4(get('interest4') || false);
  }, [setInterest4]);
  React.useEffect(() => {
    set('interest4', interest4);
  }, [interest4]);
  


  return (
    <div className={styles.interests}>
      <h2>Interests</h2>
      <ul className={styles.options_container}>
          <li>I want to be matched:</li>
          <li><input type="checkbox" id="option1" checked={interest1} onChange={() => setInterest1(!interest1)}/><label htmlFor="option1">by interests</label></li>
          <li><input type="checkbox" id="option2" checked={interest2} onChange={() => setInterest2(!interest2)}/><label htmlFor="option2">when in office</label></li>
          <li><input type="checkbox" id="option3" checked={interest3} onChange={() => setInterest3(!interest3)}/><label htmlFor="option3">with my team</label></li>
          <li><input type="checkbox" id="option4" checked={interest4} onChange={() => setInterest4(!interest4)}/><label htmlFor="option4">company wide</label></li>
      </ul>
    </div>
  );
}
  