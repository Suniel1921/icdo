import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../photoGallery/photoGallery.css';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // const response = await axios.get('http://localhost:3000/api/v1/upload/getAllPhoto');
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getAllPhoto`);
        console.log(response)
        const photoData = response.data.allPhoto || [];  // Ensure response.data.photos is an array
        setPhotos(photoData);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setPhotos([]);  // Set an empty array in case of error
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className='photoGalleryContainer'>
      <div className="container">
        <h2 className='photoGallery_Heading' data-aos="fade-right">Photo Gallery</h2>
        <div className="photoGrid">
          {photos.length > 0 ? (
            photos.map((photo, index) => (
              <div key={index} className='photoChild' data-aos="fade-right">
                <img src={photo.image} alt={photo.alt} />
                {/* <h5>{photo.title}</h5> */}
              </div>
            ))
          ) : (
            <p>No photos available</p>  // Display a message when there are no photos
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
