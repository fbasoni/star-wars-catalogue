import { Link } from 'react-router-dom';
import logo from '../../assets/Catalogue.gif';
import styles from './Header.module.css';

const Header = () => {

  return (
    <nav className={styles.header}>
      <img src={logo} className={styles.mainLogo} alt="logo"></img>
      <div className={styles.headerNav}>
        <Link className={styles.navLink} to="/catalogue">Films</Link>
        <Link className={styles.navLink} to="/planets">Planets</Link>
        <Link className={styles.navLink} to="/characters">Characters</Link>
        <Link className={styles.navLink} to="/spaceships">Spaceships</Link>
      </div>
    </nav>
  );
}

export default Header;