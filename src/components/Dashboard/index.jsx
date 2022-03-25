import './Dashboard.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserById } from '../../utils/Hooks/Api'
import User from '../../class/User'
import DashboardHeader from '../DashboardHeader'

export default function Dashboard() {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const axios = async () => {
            const user = await getUserById(id)
            setUser(user)
            setIsLoading(false)
        }
        axios()
    }, [id])

    const userClass = !isLoading
        ? new User(
              user.userInfos.firstName,
              user.userInfos.lastName,
              user.userInfos.age,
              user.score ? user.score : user.todayScore,
              user.keyData.calorieCount,
              user.keyData.proteinCount,
              user.keyData.carbohydrateCount,
              user.keyData.lipidCount
          )
        : ''

    return (
        <div className="Dashboard">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <DashboardHeader firstName={userClass.firstName} />
                </>
            )}
        </div>
    )
}
