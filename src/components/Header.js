import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'


import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <Link to="/Catalogue/Chronological">Chronological order</Link>
        <Link to="/Catalogue/Release">Release order</Link>
        <Link to="/Catalogue/Machete">Machete order</Link>
        <Link to="/Catalogue/Rinster">Rinster order</Link>
      </div>
      <form>
        <div className="search-btn">
          <input type="text" placeholder="Search..." className="inputText"></input>
          <BsSearch></BsSearch>
        </div>
      </form>
    </div>
  );
}

export default Header;