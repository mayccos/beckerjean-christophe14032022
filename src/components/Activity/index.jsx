import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { custom } from '../../utils/custom'
//Recharts
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    //Legend,
} from 'recharts'

//Icon
import BlackPoint from '../../assets/BlackPoint.svg'
import RedPoint from '../../assets/RedPoint.svg'
/**
 * CSS for component using styled.components
 */
const ActivityWrapper = styled.div`
 grid-area: 1 / 1 / 3 / 4;
 background-color: ${custom.colors.lightGrey};
 border-radius: 5px;
 padding 0.6rem;
`
const ToolTipLabel = styled.div`
    background: ${custom.colors.primaryRed};
    color: ${custom.colors.white};
    font-size: ${custom.fontSize.xSmall};
    font-weight: ${custom.fontWeight.bold};
    margin: 0.3rem;
    padding: 0.3rem;
`

const Title = styled.p`
    font-size: ${custom.fontSize.small};
    font-weight: ${custom.fontWeight.bold};
    margin-left: 2.188rem;
    margin-right: 2.188rem;
    color: ${custom.colors.darkGrey};
`
const Legend = styled.div`
    align-items: center;
    display: flex;

    margin-right: 1.313rem;
    color: ${custom.colors.grey};
    font-size: ${custom.fontSize.xSmall};
`

const Bullet = styled.span`
    font-size: ${custom.fontSize.small};
    font-weight: ${custom.fontWeight.bold};
`
const Heading = styled.div`
    align-items: center;
    display: flex;
    font-weight: ${custom.fontWeight.bold};
    justify-content: space-between;
    margin-bottom: 1.25rem;
`

/**
 * Renders Activities BarChart legend
 * @returns {JSX}
 */
const ActivityHeader = () => {
    return (
        <Heading>
            <Title>Activité quotidienne</Title>
            <Legend>
                <Bullet>
                    <img src={BlackPoint} alt="" /> Poids (Kg)
                </Bullet>

                <Bullet>
                    <img src={RedPoint} alt="" /> Calories brûlées (kCal)
                </Bullet>
            </Legend>
        </Heading>
    )
}

/**
 * @description creation of a Component that is a custom  tooltip of the chart
 * @param { Boolean } active - true if bars hovered over, false if not
 * @param { Object } payload - the data data of overflown bars
 * @returns { HTMLElement }
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <ToolTipLabel>
                <p className="tooltip__kilogram">{payload[0].value + 'kg'}</p>
                <p className="tooltip__calories">{payload[1].value + 'kcal'}</p>
            </ToolTipLabel>
        )
    }

    return null
}
/**
 * to change format of date on X axis from yyyy-mm-dd to dd
 * @param {string} date
 * @returns {string}
 */

const formatDate = (date) => {
    const day = new Date(date)
    return day.getDate().toString()
}

/**
 * Creation of an Activities BarChart with Weight & Calories burned
 * @param {object} activity
 * @returns {JSX}
 */
export default function Activity({ activity }) {
    return (
        <ActivityWrapper>
            <ActivityHeader />
            <ResponsiveContainer width="100%" height={250}>
                <BarChart barGap={5} width="100%" data={activity}>
                    <XAxis
                        dataKey="day"
                        tickFormatter={formatDate}
                        tickLine={false}
                        style={{ fontSize: '14px' }}
                        strokeDasharray="0"
                    />
                    <YAxis
                        yAxisId="poids"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        tickCount="3"
                        type="number"
                        domain={['dataMin -3', 'auto']}
                        style={{ fontSize: '14px' }}
                    />
                    <YAxis
                        yAxisId="calories"
                        tick={false}
                        orientation="left"
                        axisLine={false}
                        tickLine={false}
                        domain={['dataMin -10', 'dataMax + 10']}
                    />
                    <Tooltip
                        dy={4}
                        content={<CustomTooltip />}
                        cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
                    />

                    <CartesianGrid
                        stroke="#DEDEDE"
                        strokeDasharray="3"
                        vertical={false}
                    />
                    <Bar
                        yAxisId="calories"
                        name="kCal"
                        dataKey="calories"
                        fill={custom.colors.primaryRed}
                        barSize={8}
                        radius={[50, 50, 0, 0]}
                    />
                    <Bar
                        yAxisId="poids"
                        name="kg"
                        dataKey="kilogram"
                        fill={custom.colors.darkGrey}
                        barSize={8}
                        radius={[50, 50, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </ActivityWrapper>
    )
}

// PropTypes

Activity.PropType = {
    userActivity: PropTypes.object.isRequired,
}
