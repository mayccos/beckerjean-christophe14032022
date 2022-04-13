import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import NavBar from '../NavBar'
import SideBar from '../SideBar'

/**
 *
 * CSS for component using styled.components
 */
const SideBarWidth = '7.5rem'
const Container = styled.main`
    display: ${({ isSideNav }) => (isSideNav ? 'grid' : 'block')};
    grid-template-columns: ${({ isSideNav }) =>
        isSideNav ? `${SideBarWidth} 1fr` : 'unset'};
`

/**
 *
 * Creation of a global layout architecture, present on each page
 * @param {boolean} isSideNav
 * @param {object} children
 * @returns {JSX}
 */
export const Layout = ({ children, isSideNav }) => {
    return (
        <>
            <NavBar />
            {isSideNav ? (
                <Container isSideNav>
                    <SideBar />
                    {children}
                </Container>
            ) : (
                <Container>{children}</Container>
            )}
        </>
    )
}

// PropTypes
Layout.propTypes = {
    isSideNav: PropTypes.bool,
}
