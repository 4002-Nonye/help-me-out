import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo-white.svg';

const footerData = [
  {
    title: 'Menu',
    items: ['Menu', 'Home', 'Converter', 'How it Works'],
  },
  {
    title: 'About us',
    items: ['About us', 'About', 'Contact us', 'Privacy Policy'],
  },
  {
    title: 'Screen Record',
    items: ['Screen Record', 'Browser Window', 'Desktop', 'Application'],
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' />
        <span>HelpMeOut</span>
      </div>
      {footerData.map((data, index) => (
        <ul key={index} className={styles.ul}>
            
          {data.items.map((item, itemIndex) => (
            <li
              key={itemIndex}
               
            >
              <a href='#'>{item}</a>
            </li>
          ))}
        </ul>
      ))}
    </footer>
  );
}

export default Footer;
