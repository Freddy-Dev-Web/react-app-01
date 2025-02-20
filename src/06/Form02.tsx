
import {useState} from 'react'



export default function Form02() {

    const [destinateur, setDestinateur] = useState('')
    const [sujet, setSujet] = useState("")
    const [message, setMessage] = useState("")

        const sendMessage = () => {
            alert("Message envoyer avec succes")
            setDestinateur('')
            setSujet('')
            setMessage('')
        }



    
    return (
        <div className="p-12 ">
           <form onSubmit={sendMessage} className='bg-blue-100 rounded-2xl px-10 py-10'>
           <h1 className="font-bold size-1 ">FORMULAIRE</h1>

                <div className='mt-4'>
                    <label className="mx-2.5">Destinateur</label><br />
                    <input required className='border rounded-xl ' type="text" placeholder="Destinateur" />
                    <p>{destinateur}</p>
                </div>

                <div className='mt-4'>
                    <label className='mx-2.5'>Sujet du message</label><br />
                    <input required className='border rounded-xl'  type="text" placeholder="Sujet" />
                    <p>{sujet}</p>
                </div>

                <div className='mt-4'>
                    <label className='mx-2.5'>Message</label><br />
                    <textarea required className='border rounded-xl' placeholder="Message" />
                    <p>{message}</p>
                </div>

                <div className='pt-4'>
                    <button type="submit"  className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" >SEND</button>
                    <button type="submit" className='bg-red-500 text-white px-4 py-2 rounded cursor-pointer ml-2'>Delete</button>
                </div>
           </form>




        </div>
    )
}