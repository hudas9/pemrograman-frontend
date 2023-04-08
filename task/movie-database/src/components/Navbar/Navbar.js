import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>
            <a href="/">Movie App</a>
          </h1>
        </div>
        <div className={styles.navbar__container}>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <a href="/">Home</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="/add">Add Movie</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="/popular">Popular</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="playing">Now Playing</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="/top">Top Rated</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar