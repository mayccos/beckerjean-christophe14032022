import './DashBoard.scss'
import PropTypes from 'prop-types'

export default function DashboardHeader({ firstName }) {
    return (
        <div className="accueil">
            <h1 className="acceuil__titre">
                Bonjour{' '}
                <span className="accueil__firstName">{' ' + firstName}</span>
            </h1>
            <p className="accueil__congratulations">
                Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
        </div>
    )
}
DashboardHeader.PropType = {
    firstName: PropTypes.string.isRequired,
}
