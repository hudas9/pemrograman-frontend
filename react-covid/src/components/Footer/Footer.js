import styles from "./Footer.module.css";

const Footer = () => {
  const today = new Date();

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.footer__left}>
          <h2 className={styles.footer__brand}>
            <a href="/">Covid ID</a>
          </h2>
          <p className={styles.footer__author}>
            &#169; {today.getFullYear()}{" "}
            <a
              href="https://github.com/ahmadhudasalam/pemrograman-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ahmad Huda Salam
            </a>
            . All rights reversed.
          </p>
        </div>
        <div className={styles.footer__right}>
          <nav className={styles.footer__nav}>
            <ul className={styles.navbar__list}>
              <li className={styles.navbar__item}>
                <a href="/">Global</a>
              </li>
              <li className={styles.navbar__item}>
                <a href="/indonesia">Indonesia</a>
              </li>
              <li className={styles.navbar__item}>
                <a href="/province">Province</a>
              </li>
              <li className={styles.navbar__item}>
                <a href="/about">About</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
