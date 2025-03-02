import React from 'react';
import '../styles/ImageCard.css';

const ImageCard = ({ image, children }) => {
  const imageUrl = `${image.picture}`;

  return (
    <li className="image-card">
      <div className="image-container">
        <img alt={image.title} src={imageUrl} />
      </div>
      <div className="title-author-container">
        <h3 className="title">{image.title}</h3>
        <h3 className="author">by {image.author}</h3>
      </div>
      <div className="likes">
        <div className="likes-count">{image.likesCount}</div>
        {children}
      </div>
    </li>
  );
};

export default ImageCard;
