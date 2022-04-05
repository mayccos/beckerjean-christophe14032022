import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { custom } from '../../utils/customizer'
/**
 * Css components
 */

const Image = styled.img`
    width: 10rem;
    margin-top: 0.5rem;
`
const NavContainer = styled.nav`
    background-color: ${custom.colors.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 5.7rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0rem 3rem;
`
const NavLink = styled(Link)`
color:  ${custom.colors.white};
font-size: ${custom.fontSize.medium};
font-weight: ${custom.fontWeight.bold};
padding: 0.3rem;
text-decoration: none;
&:hover {
  color: ${custom.colors.primaryRed};
  transform: scale(1.4);
`

/**
 *
 * @description Creation of component to display the header of the site with the navigation
 * @returns { HTMLElement }
 */

/**
 * Renders the Header Navigation Bar
 * @returns {JSX}
 */
export default function NavBar() {
    return (
        <NavContainer>
            <NavLink to="/">
                <Image className="logo" src={logo} alt="logo"></Image>
            </NavLink>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/profile">Profil</NavLink>
            <NavLink to="/settings">Réglage</NavLink>
            <NavLink to="/community">Communauté</NavLink>
        </NavContainer>
    )
}
