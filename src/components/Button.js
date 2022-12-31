import styles from './Button.module.css'

const Button = () => {
    function loadCatalogue() {
    window.location = '/Catalogue'
  }
  return (
    <button onClick={loadCatalogue} className={styles.button}>
      Enter
    </button>
  );
}
export default Button