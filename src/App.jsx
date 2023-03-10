import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './assets/pages/Homepage'
import Navbar from './assets/components/Navigation/Navbar'
import Contact from './assets/pages/Contact'

function App() {
  return (
    <main>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </main>
  )
}

export default App