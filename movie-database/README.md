## Praktikum Pertemuan 9

- [State Hook](https://legacy.reactjs.org/docs/hooks-state.html)

  ```javascript
  import styles from "./Counter.module.css"
  import { useState, useEffect } from "react"

  export default function Counter() {
    const [number, setNumber] = useState(0)

    const [multiples, setMultiples] = useState(1)

    function handleMultiples(event) {
      const { value } = event.target
      value ? setMultiples(parseInt(value)) : setMultiples(1)
    }

    function increment() {
      setNumber((prevNumber) => prevNumber + multiples)
    }

    function decrement() {
      setNumber((prevNumber) => prevNumber - multiples)
    }

    return (
      <div className={styles.container}>
        <div className={styles.multiples__input}>
          <label htmlFor="multiples">Multiples</label>
          <input
            id="multiples"
            type="number"
            values={multiples}
            onChange={handleMultiples}
          />
        </div>
        <div>
          <button onClick={decrement} className={styles.button} type="button">
            -
          </button>
          <span id="number" className={styles.result}>
            {number}
          </span>
          <button onClick={increment} className={styles.button} type="button">
            +
          </button>
        </div>
        <span>*default value of multiples is 1</span>
      </div>
    )
  }
  ```

- Lifecycle
  - Render : Membuat Komponen (belum ditampilkan ke DOM).
  - Mounting : Memasukkan Komponen kedalam DOM.
  - Updating : Update Komponen pada DOM
  - Unmounting : Menghapus Komponen dari DOM
- [Effect Hook]()

  ```javascript
  import styles from "./Counter.module.css"
  import { useState, useEffect } from "react"

  export default function Counter() {
    // useState
    const [number, setNumber] = useState(0)
    const [multiples, setMultiples] = useState(1)
    function handleMultiples(event) {
      const { value } = event.target
      value ? setMultiples(parseInt(value)) : setMultiples(1)
    }
    function increment() {
      setNumber((prevNumber) => prevNumber + multiples)
    }
    function decrement() {
      setNumber((prevNumber) => prevNumber - multiples)
    }

    // useEffect
    function manipulateDOM() {
      console.log("Lifecyle: componentDidMount")
      document.title = `Number ${number}`
    }
    useEffect(manipulateDOM, [number])
    console.log("Lifecyle: render")

    return (
      <div className={styles.container}>
        <div className={styles.multiples__input}>
          <label htmlFor="multiples">Multiples</label>
          <input
            id="multiples"
            type="number"
            values={multiples}
            onChange={handleMultiples}
          />
        </div>
        <div>
          <button onClick={decrement} className={styles.button} type="button">
            -
          </button>
          <span id="number" className={styles.result}>
            {number}
          </span>
          <button onClick={increment} className={styles.button} type="button">
            +
          </button>
        </div>
        <span>*default value of multiples is 1</span>
      </div>
    )
  }
  ```

- [Fetch]() untuk mengambil data dari API

  ```javascript
  import styles from "./Hero.module.css"
  import { useState, useEffect } from "react"

  export default function Hero() {
    const [movie, setMovie] = useState({})

    // Promise
    function getMovie() {
      fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setMovie(data))
    }

    // Async Await
    // async function getMovie() {
    //   const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`
    //   const response = await fetch(url)
    //   const data = await response.json()
    //   setMovie(data)
    // }

    useEffect(() => {
      getMovie()
    }, [])

    return (
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.hero__left}>
            <h2 className={styles.hero__title}>{movie.Title}</h2>
            <h3 className={styles.hero__genre}>Genre : {movie.Genre}</h3>
            <p className={styles.hero__description}>{movie.Plot}</p>
            <button className={styles.hero__button}>Watch</button>
          </div>
          <div className={styles.hero__right}>
            <img
              className={styles.hero__image}
              src={movie.Poster}
              alt={movie.Title}
            />
          </div>
        </section>
      </div>
    )
  }
  ```

## Task Pertemuan 9

- Upload [Praktikum](https://github.com/ahmadhudasalam/pemrograman-frontend/tree/pertemuan-9/movie-database) ke [Github](https://github.com/ahmadhudasalam/pemrograman-frontend)
