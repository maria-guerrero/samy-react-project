import React from 'react';
import '../styles/LikeButton.css';

const LikeButton = ({ liked, onLikeToggle }) => {
  return (
    <button
      className={`like-button ${liked ? 'liked' : ''}`}
      onClick={onLikeToggle}
    >
      {liked ? '❤️' : '🤍'}
    </button>
  );
};

export default LikeButton;