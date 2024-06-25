import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideMenu from './SideMenu';
import { toast } from 'react-hot-toast';
import '../admin/announce.css';

const Announce = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/allAnnouncement`);
      setAnnouncements(response.data.allAnnouncement);
    } catch (error) {
      console.error('Error fetching announcements:', error);
      toast.error('Error fetching announcements');
    }
  };

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
      const uploadingToastId = toast.loading('Uploading announcement...');

      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/announcement`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.dismiss(uploadingToastId);

      toast.success('Announcement uploaded successfully');

      setTitle('');
      setImage(null);
      fetchAnnouncements(); // Refresh announcements after upload
    } catch (error) {
      console.error('Error uploading announcement:', error);
      toast.error('Error uploading announcement');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      try {
        await axios.delete(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/deleteAnnouncement/${id}`);
        setAnnouncements(announcements.filter(announcement => announcement._id !== id));
        toast.success('Announcement deleted successfully');
      } catch (error) {
        console.error('Error deleting announcement:', error);
        toast.error('Error deleting announcement');
      }
    }
  };

  return (
    <div className="gallery">
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
        
        <div className="announcement-list">
          {announcements.map(announcement => (
            <div key={announcement._id} className="announcement-item">
              <img src={announcement.image} alt="Announcement" />
              <button onClick={() => handleDelete(announcement._id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announce;
