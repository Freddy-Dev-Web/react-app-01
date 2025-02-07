
import Capitale from './Capitale'
import Hello from './Hello'
import Student from './Student'

export default function App02() {

    //JSX (Interface Utilisateur / Balises HTML)
    return (
        <div>

            <h1>Capitales</h1>

            <Capitale pays="RCA" ville="Bangui" />
            <Capitale pays="Senegal" ville="Dakar" />
            <Capitale pays="Maroc" ville="Rabat" />

            <h1>Etudiants</h1>
            <Student name="MANDABA" age={Number('20')} phoneNumber={Number('+236 74 11 39 00')} />

            <h1>Welcome</h1>
            <Hello name='Mazouka' firstName='Ludovic'/>
        </div>
    )
}