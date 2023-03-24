import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p className={styles.footer__author}>Created by <a href="https://github.com/ahmadhudasalam/pemrograman-frontend" target="_blank" rel="noopener noreferrer">huda</a> &#169; 2023</p>
      </footer>
    </div>
  )
}

export default Footer
