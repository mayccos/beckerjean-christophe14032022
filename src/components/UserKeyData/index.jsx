import PropTypes from 'prop-types'
import styled from 'styled-components'
import { custom } from '../../utils/custom'

//Icon
import energy from '../../assets/fire.svg'
import chicken from '../../assets/chicken.svg'
import cheeseburger from '../../assets/cheeseburger.svg'
import apple from '../../assets/apple.svg'

/**
 * CSS for the component using styled.components
 */
const ElementsWrapper = styled.div`
    grid-area: 1 / 4 / 5 / 5;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
`
const ElementCard = styled.div`
    display: flex;
    background-color: ${custom.colors.lightGrey};
    border-radius: 5px;
    padding-left: 1.9rem;
    align-items: center;
    box-shadow: 0rem 0.125rem 0.25rem 0rem #00000005;
    width: 100%;
`
const Image = styled.img`
    background-size: 3rem;
    border-radius: 5px;
`
const ElementText = styled.div`
    margin-left: 1.5rem;
`
const ElementValue = styled.p`
    color: ${custom.colors.darkGrey};
    font-size: ${custom.fontSize.small};
    font-style: normal;
    font-weight: ${custom.fontWeight.xBold};
    line-height: 0;
`
const ElementCategory = styled.p`
    color: ${custom.colors.grey};
    font-size: ${custom.fontSize.xSmall};
    font-weight: ${custom.fontWeight.bold};
`

/**
 * Renders the data showing calories, carbs, fats & protiens
 * @param {object} keyData
 * @returns {JSX}
 */
export default function UserKeyData({ keyData }) {
    const categories = ['Calories', 'Protéines', 'Glucides', 'Lipides']
    const icon = [energy, chicken, apple, cheeseburger]

    return (
        <ElementsWrapper>
            {categories.map((category, index) => {
                return (
                    <ElementCard key={category}>
                        <Image src={icon[index]} alt="" />
                        <ElementText>
                            <ElementValue>
                                {Object.values(keyData)[index]}
                                {index === 0 ? 'kCal' : 'g'}
                            </ElementValue>
                            <ElementCategory>{category}</ElementCategory>
                        </ElementText>
                    </ElementCard>
                )
            })}
        </ElementsWrapper>
    )
}

// PropTypes
UserKeyData.propTypes = {
    keyData: PropTypes.object,
}
