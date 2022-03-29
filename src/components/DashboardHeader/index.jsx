import PropTypes from 'prop-types'

//css
import './DashBoard.scss'

/**
 *
 * @description creation of a Component to  display the header of the dashboard
 * @param { String } firstName - the firstName of the user
 * @returns { HTMLElement }
 */
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
