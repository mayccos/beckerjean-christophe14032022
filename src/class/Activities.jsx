export default class Activities {
    constructor(sessions) {
        this._sessions = sessions.map((session) => {
            return {
                name: this.formatDate(session.day),
                ...session,
            }
        })
    }

    get formattedActivities() {
        return this._activities
    }

    formatDate = (date) => {
        const day = new Date(date)
        return day.getDate().toString()
    }
}
