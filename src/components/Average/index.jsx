import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { custom } from '../../utils/custom'
//Recharts
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'
/**
 * Css of components using styled-components
 */
const AverageWrapper = styled.div`
    grid-area: 3 / 1 / 5 / 2;
    background: ${custom.colors.primaryRed};
    border-radius: 5px;
    width: 100%;
    position: relative;
    padding: 0.625rem;
    margin-left: 2rem;
`
const AverageLegend = styled.h2`
    color: ${custom.colors.white};
    font-size: 1.3vw;
    font-weight: ${custom.fontWeight.bold};
    left: 0.7rem;
    opacity: 0.8;
    position: absolute;
    top: 0rem;
    width: 10.625rem;
`
const ToolTipLabel = styled.label`
    background: ${custom.colors.white};
    color: ${custom.colors.black};
    font-size: ${custom.fontSize.xSmall};
    font-weight: ${custom.fontWeight.bold};
    height: 1.25rem;
    line-height: 0.25rem;
    padding: 0.525rem;
    width: 1.563rem;
`

/**
 *
 * @description Creation of a tootTip component to show the information
 *              when user hovers on the line chart
 * @param { Boolean } active - true if line hovered over, false if not
 * @param { Object } payload - the data data of overflown line
 * @returns { JSX }
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
        return <ToolTipLabel>{`${payload[0].value} min`}</ToolTipLabel>
    }

    return null
}

/**
 * to change the format of day on X axis from number to letter
 * @param {number} day
 * @returns {string}
 */
export const formatDay = (day) => {
    const newDayFormat = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    if (day) return newDayFormat[day - 1]
}

export default function Average({ average }) {
    return (
        <AverageWrapper>
            <AverageLegend>Durée moyenne des sessions</AverageLegend>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart
                    data={average}
                    margin={{ top: 0, right: 8, bottom: 0, left: -55 }}
                >
                    <XAxis
                        axisLine={false}
                        tickLine={false}
                        dataKey="day"
                        tickFormatter={formatDay}
                        stroke={custom.colors.white}
                        style={{
                            fontSize: '12px',
                            fontWeight: '500',
                            opacity: '0.8',
                        }}
                    />
                    <YAxis
                        dataKey="sessionLength"
                        axisLine={false}
                        tick={false}
                        domain={['dataMin -2', 'dataMax + 20']}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={{
                            stroke: custom.colors.black,
                            strokeOpacity: 0.1,
                            strokeWidth: '45',
                        }}
                        offset={30}
                    />
                    <CartesianGrid
                        strokeDasharray="0"
                        horizontal={false}
                        vertical={false}
                    />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke={custom.colors.white}
                        strokeWidth={2}
                        dot={false}
                        style={{
                            opacity: '0.7',
                        }}
                        activeDot={{ r: 3, strokeWidth: 9, strokeOpacity: 0.3 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </AverageWrapper>
    )
}
Average.PropType = {
    average: PropTypes.array.isRequired,
}
