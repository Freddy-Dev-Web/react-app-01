import { useState } from "react";



export default function AppLangue() {

    const [flag, setFlag] = useState('./img/rca.png')
    


    function langueSango() {
        const sangoImg = './img/rca.png'
        setFlag(sangoImg)
    }

    function langueAnglais() {
        const anglaisImg = './img/nigeria.png'
        setFlag(anglaisImg)
    }

    
    return (
        <div>
            <button onClick={langueSango}>SANGO</button>
            <button onClick={langueAnglais}>ANGLAIS</button>
            <p>
            <img src={flag} alt="Image pays" width={50} height={50}/>
            </p>

        </div>
    )
}