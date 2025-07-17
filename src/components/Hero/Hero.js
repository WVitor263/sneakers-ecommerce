import React from "react";
import './Hero.css';
import image1 from '../../assets/images/tenis/fullsize/image-product-1.jpg'
import image2 from '../../assets/images/tenis/fullsize/image-product-2.jpg'
import image3 from '../../assets/images/tenis/fullsize/image-product-3.jpg'
import image4 from '../../assets/images/tenis/fullsize/image-product-4.jpg'

import iconsPrev from '../../assets/images/icon-previous.svg';
import iconsNext from '../../assets/images/icon-next.svg';

export default function Hero(){

  const[currentImage, setCurrentImage] = React.useState(0);

  const images = [image1, image2, image3, image4];

  const previousImage=()=>{
    
    setCurrentImage((currentImage - 1 + images.length)%images.length);
  };
  const nextImage=()=>{
    
    setCurrentImage((currentImage + 1)%images.length);
  };

  return(
    <section className="hero">
      <div className="carousel">
        <img src={images[currentImage]} alt={`Produto ${currentImage + 1}`} className="main-image" />

        <button className="prev" onClick={previousImage}><img src={iconsPrev} alt="icons Previus"/></button>

        <button className="next" onClick={nextImage}><img src={iconsNext} alt="icons Next"/></button>

      </div>

    </section>
  )
   
}
