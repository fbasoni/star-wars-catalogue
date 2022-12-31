import { Link } from 'react-router-dom';

import styles from './Header.module.css'

const Header = () => {

  return (
    <nav className={styles.header}>
      <h1 className={styles.headerTitle}>Starwars Catalogue</h1>
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