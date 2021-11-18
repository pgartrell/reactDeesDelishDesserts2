import React from 'react'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import '../../Styles/AnotherImageGallery.css'
import bananaPudding from "assets/images/bananaPudding.PNG"


import { Gallery, Item } from 'react-photoswipe-gallery'

const AnotherImageGallery = () => (
 

 <Gallery id="gallery">
    <Item
        original="assets/images/bananaPudding.PNG"
        thumbnail="assets/images/bananaPudding.PNG"
        width="1600"
        height="1600"
        title="$18.00"
        id="so-first"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="assets/images/bananaPudding.PNG"/>
      )}
    </Item>

    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
      )}
    </Item> 
  </Gallery>
)

export default AnotherImageGallery














//From Youtube Video
// import React, {useState} from 'react'
// import { GalleryPhotos } from '../../Data/data'
// import '../../Styles/AnotherImageGallery.css'
// import '@fortawesome/fontawesome-svg-core'


// const AnotherImageGallery = () => {

//     const [model, setModel] = useState(false);
//     const [tempimgSrc, setTempImgSrc] =  useState('')
//     const getImg = (img) =>{
//         setTempImgSrc(img);
//         setModel(true);
//     }
//     return (
//         <>
//             <div className={model? "model open": "model"}>
//                 <img src={tempimgSrc} />
//                 <i class="fas fa-window-close"></i>
                    
//             </div>
//             <h1>Dees Delish Dessert Gallery</h1>
//             <div className="gallery">
//                 {GalleryPhotos.map((item, index) => {
//                     return(
//                         <div className="pics" key={index} onClick={() => getImg(item.img)}>
//                             <img src={item.img} style={{width: '100%'}}/>
//                         </div>
//                     )
//                 })}
//             </div>

//         </>
//     )
// }

// export default AnotherImageGallery
