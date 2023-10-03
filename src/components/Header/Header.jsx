import React from 'react';
import styles from './Header.module.css';
import NavBar from '../NavBar/NavBar';
import Button from '../Button/Button';
import arrow from '../../assets/arrow.svg';
import heroImg from '../../assets/hero.png';

function Header() {
  return (
    <>
      <NavBar />
      <header className={styles.header}>
        <div className={styles.installContainer}>
          <div className={styles.install}>
            <h1>Show Them Don’t Just Tell</h1>
            <p>
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
            <Button
              btnType='link'
              variant={styles.installBtn}
              url='/get-started'
            >
              Install HelpMeOut &nbsp;
              <img src={arrow} alt='arrow' />
            </Button>
          </div>
          <div>
            <img src={heroImg} alt='hero-img' />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
