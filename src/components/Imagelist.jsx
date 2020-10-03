import React from 'react';
import './imagelist.css';
function ImageList({images}){
    const picture= images.map(image=>{
      return <img className="picture" src={image.urls.regular} alt=""/>  
    })
    return(
        <div className="imageList"> {picture}</div>
    )
}
export default ImageList;