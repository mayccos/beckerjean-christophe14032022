import './LineCharts.scss'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts'
import React from 'react'

const data = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30,
            },
            {
                day: 2,
                sessionLength: 23,
            },
            {
                day: 3,
                sessionLength: 45,
            },
            {
                day: 4,
                sessionLength: 50,
            },
            {
                day: 5,
                sessionLength: 0,
            },
            {
                day: 6,
                sessionLength: 0,
            },
            {
                day: 7,
                sessionLength: 60,
            },
        ],
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30,
            },
            {
                day: 2,
                sessionLength: 40,
            },
            {
                day: 3,
                sessionLength: 50,
            },
            {
                day: 4,
                sessionLength: 30,
            },
            {
                day: 5,
                sessionLength: 30,
            },
            {
                day: 6,
                sessionLength: 50,
            },
            {
                day: 7,
                sessionLength: 50,
            },
        ],
    },
]

function renderLegend(props) {
    const { payload } = props

    return (
        <ul>
            {payload.map((index) => (
                <li key={`item-${index}`} className="average-sessions__legend">
                    Durée moyenne des sessions
                </li>
            ))}
        </ul>
    )
}

export default function LineCharts() {
    console.log(data)
    return (
        <LineChart
            width={258}
            height={263}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
            <XAxis
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
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend
                verticalAlign="top"
                wrapperStyle={{ left: '14%', top: '11%' }}
                content={renderLegend}
            />
            <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="day" stroke="#82ca9d" />
        </LineChart>
    )
}
