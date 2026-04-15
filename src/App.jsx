import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Landing/Home'
import About from './pages/About'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App