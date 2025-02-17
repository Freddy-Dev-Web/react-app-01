


export default function Carte() {
     
    const country = {
        name: "Centrafrique",
        capitale: "Bangui",
        population: 5000000,
        pays: ["Cameroun", "France", "Niger"]
    }

    const changeColor = (name: string) => {
        if(name === "Centrafrique") {
            return {background: "red"}
        }else if(name === "France") {
            return {background: "green"} 
        } else {
            return {background: "blue"}  
        }
    }

    

    return (
        <div>
           <div className="user-card" style={changeColor(country.name)}>
           <h1>Information</h1>


                <div >Nom: <strong>{country.name}</strong></div>
                <div>Capitale: <strong>{country.capitale}</strong></div>
                <div>Population: <strong>{country.population}</strong></div>
                {country.pays.map((countrys, index) => {
                    return <div key={index} className="pays" >Pays: <strong>{countrys}</strong></div>
                })}
           </div>
        </div>
    )
}