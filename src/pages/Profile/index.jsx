import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
import DashboardHeader from '../../components/DashboardHeader'
import Activity from '../../components/Activity'
import Average from '../../components/Average'
import Performances from '../../components/Performances'
import UserKeyData from '../../components/UserKeyData'

function Profile() {
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
            <div className="profile">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <DashboardHeader firstName={user.firstName} />
                        <div className="Dashboard__charts">
                            <div className="Dashboard__charts__left">
                                <Activity data={userActivity.userActivity} />
                                <Average data={userAverage.userAverage} />
                                <Performances
                                    data={userPerformances.userPerformances}
                                />
                            </div>
                            <div className="Dashboard__charts__right">
                                <UserKeyData
                                    calorieCount={user.calorieCount}
                                    proteinCount={user.proteinCount}
                                    carbohydrateCount={user.carbohydrateCount}
                                    lipidCount={user.lipidCount}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Layout>
    )
}

export default Profile
