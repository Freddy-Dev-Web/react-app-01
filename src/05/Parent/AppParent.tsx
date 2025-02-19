import App02 from '../Enfant/App02'
import App03 from '../Enfant/App03'
import App04 from '../Enfant/App04'


export default function AppParent() {
    return (
        <div className='bg-blue-100 w-screen h-screen'>
            <div className=' flex items-center justify-center gap-x-6' >
            <App02 />
            <App03 />
            <App04 />
            </div>
        </div>
    )
}