import styles from "./Footer.module.css"

const Footer = () => {
  const today = new Date()
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p className={styles.footer__author}>
          &#169; {today.getFullYear()} <a href="https://github.com/ahmadhudasalam/pemrograman-frontend" target="_blank" rel="noopener noreferrer">Ahmad Huda Salam</a>. All rights reversed.
        </p>
      </footer>
    </div>
  )
}

export default Footer
