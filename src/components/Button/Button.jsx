import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.css';

function Button({ btnType, children, variant,url }) {
  if (btnType === 'link') {
    return (
      <Link to={url} className={`${styles.btn} ${variant}`}>
        {children}
      </Link>
    );
  }
  if (btnType === 'button') {
    return (
      <button className={`${styles.btn} ${variant}`} type="button">
        {children}
      </button>
    );
  }
}

export default Button;
