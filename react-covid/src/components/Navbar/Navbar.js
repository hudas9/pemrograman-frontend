import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>
            <a href="/">Covid ID</a>
          </h1>
        </div>
        <div className={styles.navbar__container}>
          <ul
            className={
              isMobile ? styles.navbar__list__mobile : styles.navbar__list
            }
          >
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
          <div className={styles.navbar__toggle} onClick={toggleMenu}>
            <i className={`fa ${isMobile ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
