import './SideBar.scss'
import { Link } from 'react-router-dom'
import cyclistIcon from '../../assets/cyclistIcon.svg'
import dumbbellIcon from '../../assets/dumbbellIcon.svg'
import swimmingIcon from '../../assets/swimmingIcon.svg'
import yogaIcon from '../../assets/yogaIcon.svg'

function SideBar() {
    const currentYear = new Date().getFullYear()

    return (
        <nav className="sideBar">
            <div className="sideBar__container">
                <Link to="/" className="sideBar__icon">
                    <img src={yogaIcon} alt="yoga" />
                </Link>
                <Link to="/" className="sideBar__icon">
                    <img src={swimmingIcon} alt="natation" />
                </Link>
                <Link to="/" className="sideBar__icon">
                    <img src={cyclistIcon} alt="vélo" />
                </Link>
                <Link to="/" className="sideBar__icon">
                    <img src={dumbbellIcon} alt="haltère" />
                </Link>
            </div>
            <p className="sideBar__text">Copiryght, SportSee {currentYear}</p>
        </nav>
    )
}

export default SideBar
