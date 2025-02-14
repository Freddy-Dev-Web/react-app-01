
import { useState } from "react";



const capitals:Record<string, string> = {
    "Centrafrique": "Bangui",
    "Portugal": "Lisbon",
    "Nigeria": "Abuja",
    "France": "Paris",
    "Canada": "Ottawa"
}



export default function PaysApp() {

    const [country, setCountry] = useState('Centrafrique')


    const capital = capitals[country]
    

    return (
        <div>
            <button onClick={() => setCountry('Centrafrique')}>Centrafrique</button>
            <button onClick={() => setCountry('Portugal')}>Portugal</button>
            <button onClick={() => setCountry('Nigeria')}>Nigeria</button>
            <button onClick={() => setCountry('France')}>France</button>
            <button onClick={() => setCountry('Canada')}>Canada</button>

            <p>La capitale de <strong>{country}</strong> est <strong>{capital}</strong> </p>
        </div>
    )

}