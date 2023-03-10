import React from 'react'
import About from '../components/Homepage/About'
import Awards from '../components/Homepage/Awards'
import Clients from '../components/Homepage/Clients'
import ContactLink from '../components/Homepage/ContactLink'
import CXODashboard from '../components/Homepage/CXODashboard'
import Disclosures from '../components/Homepage/Disclosures'
import EuroCarParts from '../components/Homepage/EuroCarParts'
import Hero from '../components/Homepage/Hero'
import Hubpix from '../components/Homepage/Hubpix'
import Insights from '../components/Homepage/Insights'
import Partnerships from '../components/Homepage/Partnerships'
import Footer from '../components/Navigation/Footer'

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
        {/* <Awards/>
        <Partnerships/> */}
        <Insights/>
        <ContactLink/>
        <Footer/>
    </main>
  )
}

export default Homepage