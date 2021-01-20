import React from 'react';

import ImageCard from './ImageCard';

import './ImageList.css';

export default (props)=>{
    
     
    const images = props.images.map((img)=>{
        return <ImageCard src={img.urls.regular} key={img.id} alt={img.description}/>
    });
    return(
       <div className="image-list">
           {images}
        </div>
    );
}