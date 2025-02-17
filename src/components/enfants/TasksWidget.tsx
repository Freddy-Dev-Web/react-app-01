
import style from './Widget.module.css'


export default function TasksWidget() {
    return (
        <div className={style.widget}>
            <h2>Tasks</h2>
            <p>Vous avez <span className={style.highlight}>3</span> taches en attente</p>
        </div>
    )
}