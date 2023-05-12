import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Spiderman</h2>
          <h3 className={styles.hero__description}>
            Genre : Thriller, Drama, Romance
          </h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            fugit fuga doloribus vero ipsam, perferendis eaque aperiam aliquid
            dolores sequi?
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src="https://picsum.photos/536/354"
            alt="cover"
          />
        </div>
      </section>
    </div>
  )
}
