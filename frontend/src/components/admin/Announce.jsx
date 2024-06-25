import React, { useState } from 'react';
import axios from 'axios';
import SideMenu from './SideMenu';
import { toast } from 'react-hot-toast';
import '../admin/announce.css';

const Announce = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);

    try {
      // Show "Uploading image..." toast
      const uploadingToastId = toast.loading('Uploading image...');

      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/announcement`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Dismiss the "Uploading image..." toast
      toast.dismiss(uploadingToastId);

      // Show success toast after successful submission
      toast.success('Announcement uploaded successfully');

      // Clear the form after successful submission
      setTitle('');
      setImage(null);
    } catch (error) {
      console.error('Error uploading announcement:', error);
      toast.error('Error uploading announcement');
    }
  };

  return (
    <div className="gallery container">
      <div className="sideMenuContainer">
        <div className="sidemenu">
          <SideMenu />
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleTitleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>
            <button className='announceBtn' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Announce;
