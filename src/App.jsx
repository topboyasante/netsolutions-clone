import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './assets/pages/Homepage'
import Navbar from './assets/components/Navigation/Navbar'

function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </main>
  )
}

export default App