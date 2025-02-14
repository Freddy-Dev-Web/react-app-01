import { useState } from "react"



export default function App() {

    const [compteur, setCompteur] = useState(0)





    function augmenter() {
        //compteur = compteur + 1; (INTERDIT !)
        setCompteur(compteur + 1)
    }

    function decompter() {
        setCompteur(compteur - 1)
    }


    return (
        <div>
            <button onClick={augmenter}>+</button>
            <button onClick={decompter}>-</button>
            
            <div>Compteur: {compteur}</div>
        </div>
    )



}


