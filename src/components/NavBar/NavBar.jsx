import styles from './NavBar.module.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' />
        <span>HelpMeOut</span>
      </div>
      <div className={styles.link}>
        <Link to='#features'>Features</Link>
        <Link to='#howTo'>How it works</Link>
      </div>
      <div className={styles.start}>
        <Link to='/get-started'>Get Started</Link>
      </div>
    </nav>
  );
}

export default NavBar;
