import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.homePage}>
      <p className={css.text}>Welcome to the tweets world!</p>
      <NavLink to="/tweets" className={css.link}>
        GO TWEETTING
      </NavLink>
    </div>
  );
}
