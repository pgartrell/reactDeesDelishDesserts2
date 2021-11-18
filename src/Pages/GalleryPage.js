import React from 'react'
import AnotherImageGallery from '../Components/ImageGallery/AnotherImageGallery'
import ImageGalleryCarousel from '../Components/ImageGallery/ImageGalleryCarousel'
import MainMenu from '../Components/ImageGallery/MainMenu'
import GalleryModal from "../Components/ImageGallery/GalleryModal"
import NavBar from '../Components/Header&Hero/navBar'
import Footer from '../Components/Footer/footer'


// import ImageCarousel from '../Components/ImageGallery/ImageCarousel'
// import ImageGallery from '../Components/ImageGallery/ImageGallery'
// import ImageGalleryFormat from '../Components/ImageGallery/ImageGalleryFormat'

// const images = [
//     {
//       original: 'https://picsum.photos/id/1018/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1015/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//       original: 'https://picsum.photos/id/1019/1000/600/',
//       thumbnail: 'https://picsum.photos/id/1019/250/150/',
//     },
//   ];

const GalleryPage = () => {
    return (
        <div>
            <NavBar />
            <AnotherImageGallery />
            <Footer />
            {/* 
            <GalleryModal />
             */}
          {/* <ImageGalleryCarousel />
            Use this one for Carousel: <ImageGallery items={images} />; */}
        </div>
    )
}

export default GalleryPage