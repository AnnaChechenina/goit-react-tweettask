import React from 'react';
import PropTypes from 'prop-types';
import TweetsItem from '../TweetsItem/TweetsItem';
import css from './TweetsList.module.css';

export default function TweetsList({ users }) {
  return (
    <ul className={css.list}>
      {users.map(item => (
        <TweetsItem user={item} key={item.id} />
      ))}
    </ul>
  );
}

TweetsList.propTypes = {
  users: PropTypes.arrayOf(Object).isRequired,
};
