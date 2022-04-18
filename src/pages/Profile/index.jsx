import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

/**
 * API
 */
import {
    getUserById,
    getUserActivityById,
    getUserAverageById,
    getUserPerformancesById,
} from '../../utils/Hooks/Api'

/**
 * Components
 */
import { Layout } from '../../components/Layout'
import UserStatistics from '../../components/UserStatistics'

import ProfileHeader from '../../components/ProfileHeader'

/**
 *
 * Css components that are using  styled-components
 */
const Contents = styled.div`
    min-height: 90vh;
    padding: 2.5rem;
    padding-top: 1rem;
`

/**
 *
 * Renders the Profile of a user with all their stats
 * @returns {JSX}
 */
export default function Profile() {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const [userActivity, setUserActivities] = useState([])
    const [userAverage, setUserAverage] = useState([])
    const [userPerformances, setUserPerformances] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const axios = async () => {
            const user = await getUserById(id)
            setUser(user)
            setIsLoading(false)

            const userActivity = await getUserActivityById(id)
            setUserActivities(userActivity)
            setIsLoading(false)

            const userAverage = await getUserAverageById(id)
            setUserAverage(userAverage)
            setIsLoading(false)

            const userPerformances = await getUserPerformancesById(id)
            setUserPerformances(userPerformances)
            setIsLoading(false)
        }

        axios()
    }, [id])

    return (
        <Layout isSideNav>
            <Contents>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <ProfileHeader firstName={user.firstName} />
                        <UserStatistics
                            activity={userActivity.userActivity}
                            average={userAverage.userAverage}
                            performances={userPerformances.userPerformances}
                            score={user.score}
                            keyData={user.keyData}
                        />
                    </>
                )}
            </Contents>
        </Layout>
    )
}
