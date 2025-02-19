import Counter from './Counter'
import style from './Counter.module.css'
import { useState } from 'react'



const Parent = () => {

    const [initialCount, setInitialCount] = useState(0)

    const handleChangeInitialCount = () => {
    const newInitialCount = Math.floor(Math.random() * 100)
    setInitialCount(newInitialCount)
    }




    return (
        <div className={style.container}>
            <Counter  initialCount={initialCount}/>
            <button className={style.button} onClick={handleChangeInitialCount} >Changer la valeur</button>
        </div>
    )
}

export default Parent