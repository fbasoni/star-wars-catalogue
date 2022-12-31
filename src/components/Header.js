import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'


import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>Starwars Catalogue</h1>
      <div className={styles.headerNav}>
        <Link className={styles.navLink} to="/Catalogue/Chronological">Chronological order</Link>
        <Link className={styles.navLink} to="/Catalogue/Release">Release order</Link>
        <Link className={styles.navLink} to="/Catalogue/Machete">Machete order</Link>
        <Link className={styles.navLink} to="/Catalogue/Rinster">Rinster order</Link>
      </div>
      <form className={styles.searchContainer}>
          <input type="text" placeholder="Search..." className={styles.searchInput}></input>
          <BsSearch className={styles.searchIcon}></BsSearch>
      </form>
    </div>
  );
}

export default Header;