import style from './Widget.module.css'

export default function NotificationWidget() {
    return (
        <div className={style.widget}>
            <h2>Notifications</h2>
            <p>Vous avez <span className={style.highlight}>5</span> notifications</p>
        </div>
    )
}