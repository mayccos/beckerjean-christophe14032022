import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Error from './pages/Error'
/**
 * routes & renders pages
 * @returns {JSX}
 */
function App() {
    return (
        <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/" index element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
        </Routes>
    )
}

export default App
