import React from "react";

import IconClose from "../../assets/images/icon-close.svg?react";
import iconsPrev from "../../assets/images/icon-previous.svg";
import iconsNext from "../../assets/images/icon-next.svg";

export default function Lightbox({
  images,
  thumbnails,
  lightboxImageIndex,
  setLightboxImageIndex,
  onClose,
  nextLightbox,
  previousLightbox,
}) {
  React.useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="lightbox">
      <div className="lightbox-content">
        <button className="close-btn" onClick={() => onClose()}> 
          <IconClose className="icon-close" />
        </button>

        <div className="lightbox-controls">
          <img
            src={images[lightboxImageIndex]}
            alt={`Produto ${lightboxImageIndex + 1}`}
            className="lightbox-image"
          />
          <button className="prev" onClick={previousLightbox}>
            <img src={iconsPrev} alt="icons Previus" />
          </button>
          <button className="next" onClick={nextLightbox}>
            <img src={iconsNext} alt="icons Next" />
          </button>
        </div>

        <div className="lightbox-thumbnails">
          {thumbnails.map((img, index) => (
            <div key={index}
                className={`thumbnail ${
                lightboxImageIndex === index ? "active" : ""
              }`}
                onClick={() => {
                setLightboxImageIndex(index);
              }}
              >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
