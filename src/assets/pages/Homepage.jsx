import React from 'react'
import About from '../components/Homepage/About'
import Clients from '../components/Homepage/Clients'
import CXODashboard from '../components/Homepage/CXODashboard'
import Disclosures from '../components/Homepage/Disclosures'
import EuroCarParts from '../components/Homepage/EuroCarParts'
import Hero from '../components/Homepage/Hero'
import Hubpix from '../components/Homepage/Hubpix'

function Homepage() {
  return (
    <main>
        <Hero/>
        <About/>
        <Hubpix/>
        <EuroCarParts/>
        <CXODashboard/>
        <Clients/>
        <Disclosures/>
    </main>
  )
}

export default Homepage