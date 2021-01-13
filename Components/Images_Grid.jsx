import React from 'react';
import Photo_card from '../App/Photo card/Photo_card';

const Images_Grid = ({imgsArray}) => {

    const images = imgsArray;

    const imagesUnit = imgsArray.length / 3;

    /*To replicate Unsplash layout, we need a grid with 3 'div'. In order to achieve this, the props array api results is sliced in 3 parts. 
    Each part contains a third part of the photos so we can make each part to be a grid column with a third part of the photos.*/
    return (<>
        <div className="Images_Grid__Container">
            <div>
                {images.slice(0, imagesUnit).map( img => 
                        <Photo_card img_src={img.urls.small}/>
                )}
            </div>

            <div>
                {images.slice(imagesUnit, imagesUnit * 2).map( img => 
                        <Photo_card img_src={img.urls.small}/>
                )}
            </div>

            <div>
                {images.slice(imagesUnit * 2, imagesUnit * 3).map( img => 
                        <Photo_card img_src={img.urls.small}/>
                )}
            </div>
        </div>
    </>)
}

export default Images_Grid;