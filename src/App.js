import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Erreur from './pages/404'
import Home from './pages/Home'
import Meteo from './pages/Meteo'
import './index.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div className='container'><Home /></div>} /> 
                <Route path='/meteo' element={<div className='container'><Meteo /></div>} />
                <Route path='*' element={<Erreur />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App