

interface Hello {
    lang?: string //facultatif
    name: string
}

export default function Hello(props: Hello) {
    if (props.lang === "en") {
        return (<div>Welcome <strong>{props.name}</strong></div> )
    }

    return (
        <div>Bienvenue <strong>{props.name}</strong></div>
    )
    
        
}