import { useState } from "react"

const Counter = () => {

  const [result, setResult] = useState(0)

  const increment = () => setResult(result + 1)

  return (
    <>
      <p>Result : {result}</p>
      <button onClick={increment}>Add</button>
    </>
  )
}

export default Counter