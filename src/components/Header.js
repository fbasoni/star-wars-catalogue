import { Link } from 'react-router-dom';
import logo from '../assets/Catalogue.gif'
import styles from './Header.module.css'

const Header = () => {

  return (
    <nav className={styles.header}>
      <img src={logo} className={styles.mainLogo} alt="logo"></img>
      <div className={styles.headerNav}>
        <Link className={styles.navLink} to="/Films">Films</Link>
        <Link className={styles.navLink} to="/Planets">Planets</Link>
        <Link className={styles.navLink} to="/Characters">Characters</Link>
        <Link className={styles.navLink} to="/Vehicles">Vehicles</Link>
      </div>
    </nav>
  );
}

export default Header;