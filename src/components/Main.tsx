import React from 'react';
import Interests from './Interests';
import Profile from './Profile';
import Settings from './Settings';
import './Main.scss';

export default function Main() {
  return (
    <div>
      <Interests />
      <Profile />
      <Settings />
    </div>
  );
}
