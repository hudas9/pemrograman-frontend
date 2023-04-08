import { useState } from "react"

const Counter = () => {

  const [result, setResult] = useState(0)

  const sum = () => setResult(result + 1)

  return (
    <>
      <p>Result : {result}</p>
      <button onClick={sum}>Add</button>
    </>
  )
}

export default Counter