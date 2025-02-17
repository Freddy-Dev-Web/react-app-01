// import Notifications from '../enfants/NotificationWidget'
// import Stats from '../enfants/StatsWidget'
// import Tasks from '../enfants/TasksWidget'
import {NotificationWidget2, StatsWidget2, TasksWidget2} from '../enfants/MultiChildren'
import style from './Dashboard.module.css'

// Ce composant affiche les données du parent
export default function Dashboard() {
    return (
        <div >
            <div className={style.dashboard}>
            <h1>Dashboard V2</h1>
            <p className={style.subtitle}>Statisques reelles de l'application</p>

            <div className={style.widgetsContainer}>
                <NotificationWidget2 />
                <StatsWidget2 />
                <TasksWidget2 />
            </div>
            </div>
        </div>
    )
}