import axios from 'axios'

let BaseURL = 'http://localhost:3000/user/'

async function getUserById(id) {
    try {
        const response = await axios.get(BaseURL + id)
        if (response.status === 404) {
            throw new Error('error 404')
        }
        if (response.ok) {
            const data = response.data
            console.log(data)

            const userInfos = data.userInfos
            console.log(userInfos)
            return userInfos
        }
    } catch (error) {
        console.error(error)
    }
}
export { getUserById }

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
