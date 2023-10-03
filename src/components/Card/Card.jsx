import React from 'react';
import styles from './Card.module.css';

function Card({
  children,
  head,
  paragraph,
  cardContentClass,
  cardWrapperClass,
  src,
  position,
}) {
  return (
    <div>
      <div>{children}</div>
      <div className={`${styles[position]} ${cardWrapperClass}`}>
        <img src={src} alt='img' />

        <div className={cardContentClass}>
          <h3>{head}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
