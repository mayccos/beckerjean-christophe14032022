import PropTypes from 'prop-types'
import styled from 'styled-components'
import { custom } from '../../utils/custom'

//Recharts
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts'

/**
 * CSS for component using styled.components
 */

const PerformancesWrapper = styled.div`
    grid-area: 3 / 2 / 5 / 3;
    background: ${custom.colors.darkGrey};
    border-radius: 5px;
    width: 100%;
    position: relative;
    padding: 0.625rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

/**
 * Format the labels on the radar axis from number to words
 * @param {number} kind
 * @returns {string}
 */
const formatKind = (kind) => {
    const newKindFormat = [
        'Cardio',
        'Energie',
        'Endurance',
        'Force',
        'Vitesse',
        'Intensité',
    ]
    if (kind) return newKindFormat[kind - 1]
}

/**
 * Creation a Performance Radar chart
 * @param {object} performances
 * @returns {JSX}
 */
export default function Performances({ performances }) {
    return (
        <PerformancesWrapper>
            <ResponsiveContainer width="100%">
                <RadarChart
                    cy="50%"
                    cx="50%"
                    outerRadius="60%"
                    data={performances}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kind"
                        tickFormatter={formatKind}
                        stroke={custom.colors.white}
                        tickLine={false}
                        style={{ fontSize: '.7vw', fontWeight: '500' }}
                    />
                    <Radar
                        name="Performances"
                        dataKey="value"
                        fill={custom.colors.secondaryRed}
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </PerformancesWrapper>
    )
}
// PropTypes
Performances.propTypes = {
    performances: PropTypes.array,
}
