import { PropTypes } from 'prop-types'

//Css
import './Activity.scss'
//Recharts
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

/**
 *
 * @description creation of a Component that is a custom  tooltip of the chart
 * @param { Boolean } active - true if bars hovered over, false if not
 * @param { Object } payload - the data data of overflown bars
 * @returns { HTMLElement }
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip">
                <p className="tooltip__kilogram">{payload[0].value + 'kg'}</p>
                <p className="tooltip__calories">{payload[1].value + 'kcal'}</p>
            </div>
        )
    }

    return null
}

/**
 *
 * @description creation of a Component to  display a bar chart  of the weight
 * and calories burned/day by user
 * @param { Object } userActivity
 * @param { Array.<Objects> } userActivity.data - the sessions of the user
 * @returns { HTMLElement }
 */

/**
 * to change format of date on X axis from yyyy-mm-dd to dd
 * @param {string} date
 * @returns {string}
 */
// function formatDate(date) {
//     const dateToFormat = new Intl.DateTimeFormat({
//         day: 'numeric',
//     }).format(new Date(date))
//     return dateToFormat
// }

export default function Activity(userActivity) {
    return (
        <div className="activity">
            <div className="activity__title">Activité quotidienne</div>
            <ResponsiveContainer width={'60%'} aspect={4}>
                <BarChart
                    data={userActivity.data}
                    barSize={8}
                    barGap={7}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="day" tickLine={false} tickMargin={15} />
                    <YAxis
                        yAxisId="right"
                        dataKey="kilogram"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        domain={['dataMin - 2', 'dataMax + 2']}
                        tickMargin={35}
                    />
                    <YAxis
                        yAxisId="left"
                        dataKey="calories"
                        orientation="left"
                        hide={true}
                    />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <Tooltip content={<CustomTooltip />} offset={50} />
                    <Legend
                        payload={[
                            {
                                value: 'Poids (kg)',
                                type: 'circle',
                                id: 'ID01',
                            },
                            {
                                value: 'Calories brûlées (kCal)',
                                type: 'circle',
                                id: 'ID02',
                                color: '#E60000',
                            },
                        ]}
                        align="right"
                        verticalAlign="top"
                        iconSize={8}
                        wrapperStyle={{ top: '-20px', right: '-10px' }}
                    />
                    <Bar
                        yAxisId="right"
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        yAxisId="left"
                        dataKey="calories"
                        fill="#E60000"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
Activity.PropType = {
    userActivity: PropTypes.object.isRequired,
}
