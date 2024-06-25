import React, { useEffect, useState } from 'react';
import '../announcement/announcement.css';
import axios from 'axios';

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/allAnnouncement`);
        setAnnouncements(response.data.allAnnouncement);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleCardClick = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const closeModal = () => {
    setSelectedAnnouncement(null);
  };

  return (
    <div className='announcement-container'>
      <div className="container">
        <div className="announcement-section">
          <h2>Announcements</h2>
          <div className="announcement-content">
            {announcements.length > 0 ? (
              announcements.map((announcement, index) => (
                <div className="announcement-card" key={index} onClick={() => handleCardClick(announcement)}>
                  <img src={announcement.image} alt="" className="card-img" />
                  <div className="card-body">
                    <h3 className="card-title">{announcement.title}</h3>
                    <p className="card-text">{announcement.details}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No announcements available.</p>
            )}
          </div>
        </div>
      </div>
      {selectedAnnouncement && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <h3>{selectedAnnouncement.title}</h3>
            <img src={selectedAnnouncement.image} alt="" className="modal-img" />
            <p>{selectedAnnouncement.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Announcement;
