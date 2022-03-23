import React from 'react'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
const Home = () => {
    const title = <a className="navbar-brand" href={'/'}>MET-APP</a>
    return (
        <div className="back pb-5">
            <Header Title={title} />
            <Content />
            <Footer />
        </div>
    )
}

export default Home