import { Link } from 'react-router-dom';
import { SiLinkedin } from 'react-icons/si';
import { TfiGithub } from 'react-icons/tfi';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <p className={styles.footerTitle}>Starwars Catalogue</p>
        <div className={styles.socials}>
          <div className={styles.footerNav}>
            <Link to="https://www.linkedin.com/in/fabianybasoni/">
              <SiLinkedin className={styles.footerIcon}></SiLinkedin>
            </Link>

            <Link to="https://github.com/fbasoni">
              <TfiGithub className={styles.footerIcon}></TfiGithub>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.afterFooter}></div>
    </>
  );
};

export default Footer;
