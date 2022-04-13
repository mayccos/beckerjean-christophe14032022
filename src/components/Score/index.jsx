import { custom } from '../../utils/custom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

//Recharts
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'

/**
 * CSS of components using styled.components
 */
const ScoreWrapper = styled.div`
    grid-area: 3 / 3 / 5 / 4;
    border-radius: 5px;
    width: 100%;
    position: relative;
    padding: 0.625rem;
    background: ${custom.colors.lightGrey};
    display: flex;
    justify-content: center;
    align-items: center;
`

const ScoreHeading = styled.h2`
    color: ${custom.colors.darkGrey};
    font-size: ${custom.fontSize.small};
    font-weight: ${custom.fontWeight.bold};
    left: 0.938rem;
    opacity: 0.8;
    position: absolute;
    top: 0rem;
    width: 10.625rem;
`

const ScoreLegend = styled.div`
    background: ${custom.colors.white};
    text-align: center;
    border-radius: 50%;
    position: absolute;
    height: 8.125rem;
    width: 8.125rem;
    z-index: 1;
`
const ScorePercentage = styled.p`
    color: ${custom.colors.darkGrey};
    font-size: ${custom.fontSize.medium};
    font-weight: ${custom.fontWeight.xBold};
    margin: 1.528rem 0rem 0rem 0rem;
`
const ScoreText = styled.p`
    color: ${custom.colors.grey};
    font-size: ${custom.fontSize.small};
    font-weight: ${custom.fontWeight.bold};
    line-height: 1.25rem;
    margin: 0rem;
`

/**
 *
 * Renders the user's score on a RadialBarChart
 * @param {number} score
 * @returns {JSX}
 */
export default function Score({ score }) {
    const scoreValue = [
        { value: 1, fill: 'transparent' },
        { value: score, fill: custom.colors.secondaryRed },
    ]

    return (
        <ScoreWrapper>
            <ScoreHeading>Score</ScoreHeading>
            <ScoreLegend>
                <ScorePercentage>{100 * score}%</ScorePercentage>
                <ScoreText>
                    de votre <br />
                    objectif
                </ScoreText>
            </ScoreLegend>
            <ResponsiveContainer width="100%" height={250}>
                <RadialBarChart
                    startAngle={90}
                    endAngle={500}
                    innerRadius={40}
                    outerRadius={100}
                    barSize={10}
                    data={scoreValue}
                >
                    <RadialBar
                        cornerRadius={50}
                        dataKey="value"
                        background={{ fill: custom.colors.lightGrey }}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </ScoreWrapper>
    )
}

// PropTypes
Score.propTypes = {
    score: PropTypes.number,
}
