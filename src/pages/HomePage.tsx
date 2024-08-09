import React from 'react'
import { HeaderSection } from '../components/Header/HeaderSection'
import { Navbar } from '../components/Navbar/Navbar'
import { HeroSection } from '../components/HeroSection/HeroSection'
import { Services } from '../components/ServiceSection/Services'
import Footer from '../components/Footer/Footer'
import PricingTables from '../components/PricingTable/PricingTables'

export const HomePage = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Navbar />
            <div className='flex-grow '>
                <HeroSection />
                <Services />
                <PricingTables />
            </div>
            <Footer />
        </div>
    )
}
