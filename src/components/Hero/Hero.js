import React from "react";
import './Hero.css';
import image1 from '../../assets/images/tenis/fullsize/image-product-1.jpg'
import image2 from '../../assets/images/tenis/fullsize/image-product-2.jpg'
import image3 from '../../assets/images/tenis/fullsize/image-product-3.jpg'
import image4 from '../../assets/images/tenis/fullsize/image-product-4.jpg'

import imageThumbail1 from '../../assets/images/tenis/thumbnail/image-product-1-thumbnail.jpg'
import imageThumbail2 from '../../assets/images/tenis/thumbnail/image-product-2-thumbnail.jpg'
import imageThumbail3 from '../../assets/images/tenis/thumbnail/image-product-3-thumbnail.jpg'
import imageThumbail4 from '../../assets/images/tenis/thumbnail/image-product-4-thumbnail.jpg'

import iconsPrev from '../../assets/images/icon-previous.svg';
import iconsNext from '../../assets/images/icon-next.svg';

import iconsPlus from '../../assets/images/icon-plus.svg';
import iconsMinus from '../../assets/images/icon-minus.svg';

export default function Hero() {

  const [currentImage, setCurrentImage] = React.useState(0);

  const images = [image1, image2, image3, image4];

  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  const previousImage = () => {

    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };
  const nextImage = () => {

    setCurrentImage((currentImage + 1) % images.length);
  };

  const thumbnails = [imageThumbail1, imageThumbail2, imageThumbail3, imageThumbail4];

  const [qty, setQty] = React.useState(0);

  const incrementQty = () => {
    // Lógica para incrementar a quantidade
    setQty(qty + 1);
  }
  const decrementQty = () => {
    // Lógica para decrementar a quantidade
    if (qty > 0) {
      setQty(qty - 1);
    }
  }


  return (
    <section className="hero">

      {/* Carousel */}      {/* Imagem Principal */}
      <div className="carousel">
        <img src={images[currentImage]} alt={`Produto ${currentImage + 1}`} className="main-image"
          onClick={() => setIsLightboxOpen(true)}
        />



        <div className="thumbnails">
          {thumbnails.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${currentImage === index ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}

        </div>
      </div>

       {/* Lightbox */}

      {isLightboxOpen && (
        <div className="lightbox">
          <div className="lightbox-content">


            <button className="close-btn" onClick={() => setIsLightboxOpen(false)}>x</button>


            <button className="prev" onClick={previousImage}><img src={iconsPrev} alt="icons Previus" /></button>

            <img src={images[currentImage]} alt={`Produto ${currentImage + 1}`} className="lightbox-image" />

            <button className="next" onClick={nextImage}><img src={iconsNext} alt="icons Next" /></button>

            <div className="lightbox-thumbnails">
              {thumbnails.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${currentImage === index ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentImage(index);
                  }}
                />
              ))}
            </div>

          </div>

        </div>
      )}
  

      <div className="hero-text">
        <h2>SNEAKER COMPANY</h2>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. 
         </p>
        <div className="price">
          <div className="price-info">
          <span className="priceToday">$125.00</span>
          <span className="discount">50%</span>
          </div>
          <span className="oldPrice"><s>$250.00</s></span> 
        </div>
        
        <div className="buttons">
          <button className="menus-and-plus" onClick={decrementQty}><img src={iconsMinus} alt="icon Minus"/></button>
          <span className="quantity">{qty}</span>
          <button className="menus-and-plus" onClick={incrementQty}><img src={iconsPlus} alt="icon Plus" /></button>
          </div>
          <button className="add-to-cart">Add to cart</button>
      </div>

     



    </section>
  )

}
