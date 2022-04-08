import { Link } from 'react-router-dom'
import { custom } from '../../utils/custom'
import styled from 'styled-components'

/**
 * import Icons
 */
import cyclistIcon from '../../assets/cyclistIcon.svg'
import dumbbellIcon from '../../assets/dumbbellIcon.svg'
import swimmingIcon from '../../assets/swimmingIcon.svg'
import yogaIcon from '../../assets/yogaIcon.svg'
/**
 * Css components
 */
const SideBarContainer = styled.div`
    background-color: ${custom.colors.black};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: grid;
`

const Copyright = styled.p`
    color: ${custom.colors.white};
    display: flex;
    font-size: ${custom.fontSize.xSmall};
    font-weight: ${custom.fontWeight.bold};
    justify-content: center;
    align-items: center;
    margin-bottom: 1.25rem;
    transform: rotate(180deg);
    writing-mode: vertical-lr;
`

const Image = styled.img`
    margin-top: 0.938rem;
    width: 3rem;
    &:hover {
        transform: scale(1.3);
    }
`

const SideBarLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0.625rem;
    align-items: center;
    flex-direction: column;
    height: 100%;
    justify-content: center;
`

/**
 *
 * @description Creation of component to display the icons in the side bar
 * @param { String } image - image of the icon
 * @returns
 */
function SideBar() {
    //Actualization of year based on current year
    const currentYear = new Date().getFullYear()

    return (
        <SideBarContainer>
            <SideBarLink>
                <Link to="/">
                    <Image src={yogaIcon} alt="yoga" />
                </Link>
                <Link to="/">
                    <Image src={swimmingIcon} alt="natation" />
                </Link>
                <Link to="/">
                    <Image src={cyclistIcon} alt="vélo" />
                </Link>
                <Link to="/">
                    <Image src={dumbbellIcon} alt="haltère" />
                </Link>
            </SideBarLink>
            <Copyright>Copiryght, SportSee {currentYear}</Copyright>
        </SideBarContainer>
    )
}

export default SideBar
