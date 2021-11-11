import React from 'react'
import Hero from '../Components/Header&Hero/hero'
import PopularProducts from '../Components/PopularProducts/popularProducts'
import Feature from '../Components/Feature/feature'
import Footer from '../Components/Footer/footer'
import { productData } from '../Data/data'

const About = () => {
    return (
        <div>
            <Hero />
            <PopularProducts data={productData} />
            <Feature />
            <Footer />
        </div>
    )
}

export default About

