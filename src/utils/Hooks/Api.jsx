import axios from 'axios'

let CommonURL = 'http://localhost:3000/user/'

async function getUserById(id) {
    try {
        const response = await axios.get(CommonURL + id)

        const ddata = response.data.data
        const userInfos = ddata.userInfos
        const firstName = userInfos.firstName
        const keyData = ddata.keyData
        const calorieCount = keyData.calorieCount
        const proteinCount = keyData.proteinCount
        const carbohydrateCount = keyData.carbohydrateCount
        const lipidCount = keyData.lipidCount
        const score = ddata.score
        console.log(calorieCount)
        return {
            userInfos,
            firstName,
            score,
            keyData,
            calorieCount,
            proteinCount,
            carbohydrateCount,
            lipidCount,
        }
    } catch (error) {
        console.error(error)
    }
}

async function getUserActivityById(id) {
    try {
        const response = await axios.get(CommonURL + `${id}/activity`)

        const ddata = response.data.data
        const userActivity = ddata.sessions

        return { userActivity }
    } catch (error) {
        console.error(error)
    }
}

async function getUserAverageById(id) {
    try {
        const response = await axios.get(CommonURL + `${id}/average-sessions`)

        const ddata = response.data.data
        const userAverage = ddata.sessions

        return { userAverage }
    } catch (error) {
        console.error(error)
    }
}

async function getUserPerformancesById(id) {
    try {
        const response = await axios.get(CommonURL + `${id}/performance`)

        const ddata = response.data.data
        const userPerformances = ddata

        return { userPerformances }
    } catch (error) {
        console.error(error)
    }
}
export {
    getUserById,
    getUserActivityById,
    getUserAverageById,
    getUserPerformancesById,
}

// export default function useFetch(url) {
//     const [isLoading, setLoading] = useState(false)
//     const [error, setError] = useState(false)
//     const [data, setData] = useState({})

//     useEffect(() => {
//         if (!url) {
//             return setLoading(true)
//         }

//         async function fetchData() {
//             try {
//                 const response = await fetch(url)
//                 const { data } = await response.json()

//                 setData(data)
//             } catch (err) {
//                 console.log(err)
//                 setError(true)
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchData()
//     }, [url])
//     return { isLoading, error, data }
// }
