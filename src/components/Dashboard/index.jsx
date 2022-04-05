// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// //API
// import {
//     getUserById,
//     getUserActivityById,
//     getUserAverageById,
//     getUserPerformancesById,
// } from '../../utils/Hooks/Api'

//Css
import './Dashboard.scss'

// //components
// import DashboardHeader from '../DashboardHeader'
// import Activity from '../Activity'
// import Average from '../Average'
// import Performances from '../Performances'

// export default function Dashboard() {
//     const { id } = useParams()
//     const [user, setUser] = useState({})
//     const [userActivity, setUserActivities] = useState([])
//     const [userAverage, setUserAverage] = useState([])
//     const [userPerformances, setUserPerformances] = useState([])
//     const [isLoading, setIsLoading] = useState(true)
//     useEffect(() => {
//         const axios = async () => {
//             const user = await getUserById(id)
//             setUser(user)
//             setIsLoading(false)

//             const userActivity = await getUserActivityById(id)
//             setUserActivities(userActivity)
//             setIsLoading(false)

//             const userAverage = await getUserAverageById(id)
//             setUserAverage(userAverage)
//             setIsLoading(false)

//             const userPerformances = await getUserPerformancesById(id)
//             setUserPerformances(userPerformances)
//             setIsLoading(false)
//         }
//         axios()
//     }, [id])

//     return (
//         <div className="Dashboard">
//             {isLoading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <>
//                     <DashboardHeader firstName={user.firstName} />
//                     <div className="Dashboard__charts">
//                         <div className="Dashboard__charts__left">
//                             <Activity data={userActivity.userActivity} />
//                             <Average data={userAverage.userAverage} />
//                             <Performances data={userPerformances.ddata} />
//                         </div>
//                     </div>
//                 </>
//             )}
//         </div>
//     )
// }
