import Country from './Country'

interface CountryType {
    name: string
    flag: string
    capitale: string
    population: number
}

const countryList:Array<CountryType> = [
    {
        name: "RCA",
        capitale: "Bangui",
        population: 5000000,
        flag: "./img/rca.png"
    },

    {
        name: "Portugal",
        capitale: "Lisbon",
        population: 10000000,
        flag: './img/portugual.png'
    }
];

export default function CountryApp() {
    const countries = countryList.map(function(p, index) {
        return (
            <Country
            key={index}
            name={p.name}
            capitale={p.capitale}
            flag={p.flag}
            population={p.population} />
        )
    });

    return (
        <div>
            <h1>Listes pays</h1>
            {countries}
        </div>
    )
}