import React from 'react'
// import Gallery from '../Components/ImageGallery/GalleryModal'
import ImageGalleryCarousel from '../Components/ImageGallery/ImageGalleryCarousel'
import MainMenu from '../Components/ImageGallery/MainMenu'

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
            
          <MainMenu />
          {/* <ImageGalleryCarousel />
            Use this one for Carousel: <ImageGallery items={images} />; */}
        </div>
    )
}

export default GalleryPage
