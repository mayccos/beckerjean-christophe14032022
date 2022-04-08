import PropTypes from 'prop-types'
import styled from 'styled-components'
import { custom } from '../../utils/custom'
/**
 * Css components
 */

const Header = styled.div`
    padding-bottom: 1.9rem;
    padding-left: 2rem;
`
const HeaderTitle = styled.h1``
const HeaderText = styled.p`
    font-weight: ${custom.fontWeight.regular};
    font-size: ${custom.fontSize.small};
`
const UserName = styled.span`
    color: ${custom.colors.primaryRed};
`

/**
 *
 * @description creation of a Component to  display the header of the Profile page
 * @param { String } firstName - the firstName of the user
 * @returns { JSX }
 */

export default function ProfileHeader({ firstName }) {
    return (
        <Header>
            <HeaderTitle>
                Bonjour <UserName>{firstName}</UserName>
            </HeaderTitle>
            <HeaderText>
                Félicitation ! Vous avez explosé vos objectifs hier 👏
            </HeaderText>
        </Header>
    )
}

ProfileHeader.PropType = {
    firstName: PropTypes.string.isRequired,
}
