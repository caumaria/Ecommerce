import React from "react";
import '/node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import css from './index.css';

const images = [
    {
        original: 'image-product-1.jpg',
        thumbnail: 'image-product-1.jpg',
    },
    {
        original: 'image-product-2.jpg',
        thumbnail: 'image-product-2.jpg',
    },
    {
        original: 'image-product-3.jpg',
        thumbnail: 'image-product-3.jpg',
    },
    {
        original: 'image-product-4.jpg',
        thumbnail: 'image-product-4.jpg',
    }
];

class ImageSliderComponent extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <ImageGallery                
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={false}
                />
            </div>
        );
    }
}
export default ImageSliderComponent;