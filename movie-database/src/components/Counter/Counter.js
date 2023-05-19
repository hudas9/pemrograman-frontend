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
