import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';


const Button = () => {
  const navigate = useNavigate();

  const loadCatalogue = () => {
    navigate('/films');
  };

  return (
    <div className={styles.btnWrap}>
      <button onClick={loadCatalogue} className={styles.loadButton}>Enter
      </button>
    </div>
  );
}
export default Button