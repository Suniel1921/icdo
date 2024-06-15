import React from 'react';
import '../photoGallery/photoGallery.css';


const PhotoGallery = () => {
  const photos = [
    { src: "/image/Gallery/g0.jpg", alt: "Gallery Image", title: "title goes here" },
    { src: "/image/Gallery/g1.jpg", alt: "Gallery Image", title: "title goes here" },
    { src: "/image/Gallery/g2.jpg", alt: "Gallery Image", title: "title goes here" },
    { src: "/image/Gallery/g3.jpg", alt: "Gallery Image", title: "title goes here" },
    { src: "/image/Gallery/g4.jpg", alt: "Gallery Image", title: "title goes here" },
    { src: "/image/Gallery/g4.jpg", alt: "Gallery Image", title: "title goes here" },
    { src: "/image/Gallery/g4.jpg", alt: "Gallery Image", title: "title goes here" },
    { src: "/image/Gallery/g4.jpg", alt: "Gallery Image", title: "title goes here" },
  ];

  return (
    <div className='photoGalleryContainer'>
      <div className="container">
        <h2 className='photoGallery_Heading' data-aos="fade-right">Photo Gallery</h2>
        <div className="photoGrid">
          {photos.map((photo, index) => (
            <div key={index} className='photoChild' data-aos="fade-right">
              <img src={photo.src} alt={photo.alt} />
              <h5>{photo.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
