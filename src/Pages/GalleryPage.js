import React from 'react'
import AnotherImageGallery from '../Components/ImageGallery/AnotherImageGallery'

import NavBar from '../Components/Header&Hero/navBar'
import Footer from '../Components/Footer/footer'


const GalleryPage = () => {
    return (
        <div>
            <NavBar />
            <AnotherImageGallery />
            <Footer />
        </div>
    )
}

export default GalleryPage