
import { createRoot } from 'react-dom/client'
import './index.css'
import Capitale from './02/Capitale.tsx'
import Hello from './02/Hello.tsx'
import Student from './02/Student.tsx'


createRoot(document.getElementById('root')!).render(

    <div>
      <h1>Capitales</h1><br />
      <Capitale pays="RCA" ville="Bangui" />

      <h1>Etudiants</h1><br />
      <Student name='MANDABA' age= {20}  phoneNumber={Number('+236 74 11 39 00')} />
      <Student name='MANDABA' age= {20} phoneNumber={Number('+236 74 11 39 00')} />

      <h1>Welcome</h1><br />
      <Hello name='fr' firstName='Ludovic' />
      <Hello name='en' firstName='Ludovic' />
      <Hello name='es' firstName='Ludovic' />
    </div>
  
)
