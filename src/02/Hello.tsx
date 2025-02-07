

interface Hello {
    lang?: string //facultatif
    name: string
    firstName: string
}

export default function Hello(props: Hello) {
    if (props.lang === "en") {
        return (<div>Welcome <strong>{props.name}</strong></div> )
    }

    return (
        <div>Bienvenue <strong>{props.firstName}</strong></div>
    )
    
        
}