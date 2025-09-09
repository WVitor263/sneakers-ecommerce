import React, {useState} from "react";
import "./ProductImage.css";
import React from 'react';


 function ProductImage({src, alt}) {

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  return(
    <div className="product-image">
      <img src={src}
       alt={alt} 
       onClick={() => setIsLightboxOpen(true)}
       />
       {isLightboxOpen &&(
        <div className="lightbox" onClick={() => setIsLightboxOpen(false)}>
          <img src={src} alt={alt} />
          
        </div>
       )}
    </div>
  )
}
export default ProductImage;