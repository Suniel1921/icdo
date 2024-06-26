import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import SideMenu from './SideMenu';
import { Toaster, toast } from 'react-hot-toast';
import '../admin/gallery.css';

const Gallery = () => {
  const [file, setFile] = useState(null);
  const [photos, setPhotos] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/getAllPhoto`);
      console.log(response)
      setPhotos(response.data.allPhoto);
    } catch (error) {
      console.error('Error fetching photos:', error);
      toast.error('Error fetching photos');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    const toastId = toast.loading("Uploading image, please wait...");

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/gallery`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      toast.success(response.data.message, { id: toastId });
      setFile(null);
      fetchPhotos();
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading file', { id: toastId });
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = await toast.promise(
      new Promise((resolve) => {
        toast((t) => (
          <div>
            <p>Are you sure you want to delete this photo?</p>
            <div>
              <button onClick={() => resolve(true)}>Yes</button>
              <button onClick={() => resolve(false)}>No</button>
            </div>
          </div>
        ));
      }),
      {
        loading: 'Waiting for confirmation...',
        success: 'Confirmed!',
        error: 'Cancelled',
      }
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/deletePost/${id}`);
      toast.success('Photo deleted successfully');
      fetchPhotos();
    } catch (error) {
      console.error('Error deleting photo:', error);
      toast.error('Error deleting photo');
    }
  };

  return (
    <>
      <div className="gallery container">
        <div className="sideMenuContainer">
          <div className="sidemenu">
            <SideMenu />
          </div>
          <div className="gallery_container">
            <h3>Add your Gallery Photo from here</h3>
            <form onSubmit={handleSubmit} className="gallery_form">
              <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </div>
              {file && <p>Selected file: {file.name}</p>}
              <button type="submit" className="submitButton">Submit</button>
            </form>
            <div className="photo-grid">
              {photos.map((photo) => (
                <div key={photo._id} className="photo-item">
                  <img src={photo.image} alt="Gallery" />
                  <button onClick={() => handleDelete(photo._id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Gallery;
