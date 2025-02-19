import { useState } from 'react'
import style from './Counter.module.css'

        const Counter = ({ initialCount= 0 }) => {
        const [count, setCount] = useState(initialCount)

        const increment = () => setCount(count + 1)
        const decrement = () => setCount(count - 1)
        const reset = () => setCount(initialCount)


    return (
        <div className={style.container}>
            <h1>Compteur: {count}</h1>
       
            <button onClick={increment}>Augmenter</button>
            <button onClick={decrement}>Diminuer</button>
            <button onClick={reset}>Reinitialiser {initialCount}</button>

        </div>
    )
}

export default Counter