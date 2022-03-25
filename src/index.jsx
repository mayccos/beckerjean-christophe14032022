import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import reportWebVitals from './reportWebVitals'
import Header from './components/Header'
import Profile from './pages/Profile'
import Home from './pages/Home'
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <SideBar />

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/profile/:id" element={<Profile />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
