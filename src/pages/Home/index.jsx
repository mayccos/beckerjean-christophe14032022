import React from 'react'
import Thumb from '../../components/Thumb'
import { data } from '../../_mocks_/Data'
import { Layout } from '../../components/Layout'
import './Home.scss'

function Home() {
    return (
        <Layout>
            <div className="home">
                <div className="home__wrapper">
                    {data.map((data) => (
                        <Thumb key={data.id} id={data.id} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Home
