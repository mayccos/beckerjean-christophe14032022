import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { custom } from '../../utils/custom'
import { Layout } from '../../components/Layout'

/**
 * CSS for the component using styled.components
 */
const Contents = styled.main`
    margin: 0 auto;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
`
const Logo = styled.img``
const Title = styled.h1`
color: ${custom.colors.darkGrey}
font-size: ${custom.fontSize.medium}
font-weight: ${custom.fontWeight.xBold}
`
const Title2 = styled.h2`
color: ${custom.colors.black}
font-size: ${custom.fontSize.small}
font-weight: ${custom.fontWeight.regular}
`
const CardWrapper = styled.div`
    display: flex;
`

const Links = styled(Link)`
color: ${custom.colors.darkGrey};
font-size: ${custom.fontSize.small};
font-weight: ${custom.fontWeight.bold};
padding: 0.913rem;
margin: 1.913rem;
border-radius: 5px;
background-color: ${custom.colors.lightGrey};
text-decoration: none;
  &:hover {
    background-color: ${custom.colors.primaryRed};
    color: ${custom.colors.white};
    transform: scale(1.2);`

/**
 * Render Home page
 * @returns {JSX}
 */
export default function Home() {
    return (
        <Layout>
            <Contents>
                <Logo src={logo} alt="logo sportsee" />
                <Title>Bienvenue sur le site SportSee !</Title>
                <Title2>Choisissez un profile utilisateur</Title2>
                <CardWrapper>
                    <Links to="/profile/18">Profile de Cecilia</Links>
                    <Links to="/profile/12">Profile de Karl</Links>
                </CardWrapper>
            </Contents>
        </Layout>
    )
}
