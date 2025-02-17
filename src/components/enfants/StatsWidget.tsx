
import style from './Widget.module.css'

export default function StatsWidget() {
    return (
        <div className={style.widget}>
            <h2>Stats</h2>
            <p>Vous avez accompli <span className={style.highlight}>7</span> taches</p>
        </div>
    )
}