import styles from "./Footer.module.css"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p className={styles.footer__author}>
          &#169; {year}{" "}
          <a
            href="https://github.com/ahmadhudasalam/pemrograman-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahmad Huda Salam
          </a>
          . All rights reversed.
        </p>
      </footer>
    </div>
  )
}
