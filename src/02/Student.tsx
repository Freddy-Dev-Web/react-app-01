

interface Student {
    name: string
    age: number
    phoneNumber: number
}


export default function Student(props: Student) {
    return (
        <div>
            Nom: <strong>{props.name}</strong>
            Age: <strong>{props.age}</strong>
            phoneNumber: <strong>{props.phoneNumber}</strong>
        </div>
    )
}