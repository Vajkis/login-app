function Notifications({ notificationsList }) {
    return (
        <div>
            {notificationsList.map((n, i) => <div key={i}>{n}</div>)}
        </div>
    );
}

export default Notifications;