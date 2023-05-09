import styles from "./Navbar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);

  function toggleNavbar() {
    setIsToggle(!isToggle);
  }

  function handleWindowResize() {
    if (isToggle && window.innerWidth >= 768) {
      setIsToggle(false);
    }
  }

  window.addEventListener("resize", handleWindowResize);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>
            <Link to="/">Movie App</Link>
          </h1>
        </div>
        <div className={styles.navbar__container}>
          <ul
            className={
              isToggle ? styles.navbar__list__active : styles.navbar__list
            }
          >
            <li className={styles.navbar__item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/add">Add Movie</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/playing">Now Playing</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/movie/top-rated">Top Rated</Link>
            </li>
          </ul>
          <div className={styles.navbar__toggle}>
            <span onClick={toggleNavbar}>
              {isToggle ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
