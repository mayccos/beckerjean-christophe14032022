import { PropTypes } from 'prop-types'
//Css
import './Average.scss'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Dot,
    ResponsiveContainer,
} from 'recharts'
import React from 'react'

function renderLegend(props) {
    const { payload } = props

    return (
        <ul>
            {payload.map((index) => (
                <li key={`item-${index}`} className="averageSessions__legend">
                    Durée moyenne des sessions
                </li>
            ))}
        </ul>
    )
}

/**
 *
 * @description Creation of a component to custom the tooltip of the chart
 * @param { Boolean } active - true if line hovered over, false if not
 * @param { Object } payload - the data data of overflown line
 * @returns { HTMLElement }
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="averageSessions__tooltip">
                <p className="label">{`${payload[0].value} min`}</p>
            </div>
        )
    }

    return null
}

/**
 *
 * @description Creation of a component to display a custom dot when the dot is active on the chart
 * @param { object } props - The properties of the active dot
 * @returns { HTMLElement }
 */
const CustomActiveDot = (props) => {
    const { cy, cx } = props

    return (
        <>
            <Dot r={4} cy={cy} cx={cx + 12} fill="#FFF" />
            <Dot r={8} cy={cy} cx={cx + 12} fill="rgba(255, 255, 255, 0.3)" />
        </>
    )
}
/**
 *
 * @description function to custom the background color of the chart according to the point flown over
 * @param { Object } e - Properties of the event
 */
const hoverColorBackground = (e) => {
    if (e.isTooltipActive === true) {
        let div = document.querySelector('.averageSessions')
        let windowWidth = div.clientWidth
        let mouseXPercentage = Math.round(
            (e.activeCoordinate.x / windowWidth) * 100
        )
        div.style.background = `linear-gradient(90deg, rgba(255,0,0) ${mouseXPercentage}%, rgba(230,0,0) ${mouseXPercentage}%, rgba(230,0,0) 100%)`
    }
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

export default function Average(userAverage) {
    return (
        <div className="averageSessions">
            <ResponsiveContainer width={'100%'} aspect={1.2} height={'100%'}>
                <LineChart
                    className="averageSessions__charts"
                    data={userAverage.data}
                    margin={{ top: 5, right: 16, left: 14, bottom: 5 }}
                    onMouseMove={(e) => {
                        hoverColorBackground(e)
                    }}
                >
                    <XAxis
                        tickFormatter={formatDay}
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fill: '#FFF',
                            fontSize: '12px',
                            opacity: 0.5,
                        }}
                        allowDataOverflow={true}
                    />
                    <YAxis hide={true} domain={[0, 'dataMax + 20']} />

                    <CartesianGrid
                        vertical={false}
                        horizontal={false}
                        axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Legend
                        verticalAlign="top"
                        wrapperStyle={{ left: '2%', top: '11%' }}
                        content={renderLegend}
                    />
                    <defs>
                        <linearGradient
                            id="colorSessionLength"
                            x1="1"
                            y1="0"
                            x2="0"
                            y2="0"
                        >
                            <stop
                                offset="10%"
                                stopColor="#FFF"
                                stopOpacity={1}
                            />
                            <stop
                                offset="90%"
                                stopColor="#FFF"
                                stopOpacity={0.5}
                            />
                        </linearGradient>
                    </defs>
                    <Line
                        type="monotone"
                        dataKey="day"
                        stroke="#fff"
                        dot={false}
                        activeDot={<CustomActiveDot />}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
Average.PropType = {
    userAverage: PropTypes.object.isRequired,
}
