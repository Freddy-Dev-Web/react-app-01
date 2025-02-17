import style from './Widget.module.css'


export  function NotificationWidget2() {
    return (
        <div className={style.widget}>
            <h2>Notifications</h2>
            <p>Vous avez <span className={style.highlight}>5</span> notifications</p>
        </div>
    )
}

export  function StatsWidget2() {
    return (
        <div className={style.widget}>
            <h2>Stats</h2>
            <p>Vous avez accompli <span className={style.highlight}>7</span> taches</p>
        </div>
    )
}

export  function TasksWidget2() {
    return (
        <div className={style.widget}>
            <h2>Tasks</h2>
            <p>Vous avez <span className={style.highlight}>3</span> taches en attente</p>
        </div>
    )
}