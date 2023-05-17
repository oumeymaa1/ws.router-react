import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieDesc from './MovieDesc/MovieDesc'
import NavBar from './NavBar/NavBar'
import App from '../App'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/movie/:id' element={<MovieDesc/>} />

        </Routes>
    </div>
  )
}

export default Home