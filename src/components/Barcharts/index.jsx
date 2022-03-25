import './BarCharts.scss'
import useFetch from '../../utils/Hooks/Api'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    //ResponsiveContainer,
} from 'recharts'

// const data = [
//     {
//         day: '2020-07-01',
//         kilogram: 70,
//         calories: 240,
//     },
//     {
//         day: '2020-07-02',
//         kilogram: 69,
//         calories: 220,
//     },
//     {
//         day: '2020-07-03',
//         kilogram: 70,
//         calories: 280,
//     },
//     {
//         day: '2020-07-04',
//         kilogram: 70,
//         calories: 500,
//     },
//     {
//         day: '2020-07-05',
//         kilogram: 69,
//         calories: 160,
//     },
//     {
//         day: '2020-07-06',
//         kilogram: 69,
//         calories: 162,
//     },
//     {
//         day: '2020-07-07',
//         kilogram: 69,
//         calories: 390,
//     },
// ]
export default function BarCharts() {
    const { data, isLoading, error } = useFetch(
        `http://localhost:3000/user/18/activity`
    )
    const userActivities = data.sessions
    console.log(userActivities)
    if (error) {
        return (
            <span className="activity__error">Oups il y a eu un problème</span>
        )
    }
    return (
        <div className="activity">
            <div className="activity__title">Activité quotidienne</div>
            {isLoading ? (
                <span className="activity__loading">Loading...</span>
            ) : (
                <BarChart
                    width={835}
                    height={320}
                    data={userActivities}
                    barSize={8}
                    barGap={7}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="day" tickLine={false} tickMargin={15} />
                    <YAxis
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
                        axisLine={false}
                        tickLine={false}
                        domain={['dataMin - 2', 'dataMax + 2']}
                    />
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <Tooltip />
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
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[10, 10, 0, 0]}
                    />
                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        radius={[10, 10, 0, 0]}
                    />
                </BarChart>
            )}
        </div>
    )
}
