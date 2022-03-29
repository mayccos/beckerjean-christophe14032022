import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

/**
 *
 * @description Creation of component to display the header of the site with the navigation
 * @returns { HTMLElement }
 */
function Header() {
    return (
        <nav className="headerNav">
            <Link to="/">
                <img
                    src={logo}
                    className="headerNav__img"
                    alt=""
                    data-testid="logo"
                />
            </Link>
            <div className="headerNav__container">
                <Link to="/" className="headerNav__link">
                    Accueil
                </Link>
                <Link to="/" className="headerNav__link">
                    Profil
                </Link>
                <Link to="/" className="headerNav__link">
                    Réglage
                </Link>
                <Link to="/" className="headerNav__link">
                    Communauté
                </Link>
            </div>
        </nav>
    )
}
export default Header
