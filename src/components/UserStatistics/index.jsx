import styled from 'styled-components'

/**
 * Components
 */
import Activity from '../Activity'
import Average from '../Average'
import Performances from '../Performances'
import Score from '../Score'
import UserKeyData from '../UserKeyData'

/**
 * CSS for component using styled.components
 */
const StatsGraphs = styled.div`
    grid-area: 1 / 1 / 5 / 4;
    display: grid;
    gap: 1.5rem;
`

const UserStats = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
    width: 100%;
`
const AnalysisCharts = styled.div`
    grid-area: 3 / 1 / 5 / 4;
    display: flex;
    grid-column-gap: 1.5rem;
`

/**
 * Renders the Statistics of a user
 * @param {object} user
 * @returns {JSX}
 */
export default function UserStatistics({
    activity,
    average,
    performances,
    keyData,
    score,
}) {
    return (
        <UserStats>
            <StatsGraphs>
                <Activity activity={activity} />
                <AnalysisCharts>
                    <Average average={average} />
                    <Performances performances={performances} />
                    <Score score={score} />
                </AnalysisCharts>
            </StatsGraphs>
            <UserKeyData keyData={keyData} />
        </UserStats>
    )
}
