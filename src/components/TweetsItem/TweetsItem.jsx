import React, { useState } from 'react';
import css from './TweetsItem.module.css';
import PropTypes from 'prop-types';
import { formatNumber } from '../../helpers/formatNumber';
import picture from '../../images/picture.png';

import logo from '../../images/logo.png';

import { followUser, unFollowUser } from '../../helpers/api';

export default function TweetsItem({ user }) {
  const [isFollowed, setIsFollowed] = useState(user.isFollowed || false);
  const [followers, setFollowers] = useState(user.followers);

  const handleClickFollow = async () => {
    setIsFollowed(true);
    setFollowers(prevState => prevState + 1);
    await followUser(user.id, followers + 1);
  };

  const handleClickUnFollow = async () => {
    setIsFollowed(false);
    setFollowers(prevState => prevState - 1);
    await unFollowUser(user.id, followers - 1);
  };

  return (
    <li className={css.tweet}>
      <picture>
        <source srcSet={`${picture} `} />
        <img src={picture} alt={picture} />
      </picture>

      <picture className={css.logo}>
        <source srcSet={`${logo} `} />
        <img src={logo} alt="logo" />
      </picture>

      <div className={css.line}></div>

      <div className={css.avatarWrapper}></div>
      <img className={css.avatar} src={user.avatar} alt="avatar" />

      <p className={css.textTweets}>{user.tweets} tweets</p>
      <p className={css.textFollowers}>{formatNumber(followers)} follower</p>

      {isFollowed ? (
        <button className={css.buttonActive} onClick={handleClickUnFollow}>
          Following
        </button>
      ) : (
        <button className={css.button} onClick={handleClickFollow}>
          Follow
        </button>
      )}
    </li>
  );
}

TweetsItem.propTypes = {
  user: PropTypes.object.isRequired,
};
