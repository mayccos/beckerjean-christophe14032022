//Css
import './Performances.scss'
import React from 'react'
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Text,
} from 'recharts'

function renderPolarAngleAxis(props) {
    const { payload, x, y, cx, cy, ...rest } = props
    return (
        <Text
            {...rest}
            verticalAnchor="middle"
            y={y + (y - cy) / 30}
            x={x + (x - cx) / 30}
            fontSize="clamp(8px, 0.8vw, 12px)"
            fill="#FFF"
        >
            {payload.value}
        </Text>
    )
}

export default function Performances(ddata) {
    return (
        <div className="radar">
            <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="70%"
                data={ddata.data}
                innerRadius={10}
                startAngle={30}
                endAngle={-330}
            >
                <PolarGrid radialLines={false} stroke="#FFF" />
                <PolarAngleAxis
                    dataKey="kind"
                    tickLine={false}
                    tick={(props) => renderPolarAngleAxis(props)}
                />
                <PolarRadiusAxis axisLine={false} tick={false} />
                <Radar
                    dataKey="value"
                    fill="rgba(255, 1, 1)"
                    fillOpacity={0.7}
                />
            </RadarChart>
        </div>
    )
}
