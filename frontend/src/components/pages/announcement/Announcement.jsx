import React from 'react';
import '../announcement/announcement.css'

const Announcement = () => {
  return (
    <>
      <div className='announcementContainer'>
        <div className="container">
          <h1>Welcome to the Announcement page of ICDO testing</h1>

          <div className="announcementSection">
            <h2>Announcements</h2>
            <div className="announcementContent">
              {/* Add your announcement content here */}
              <p>Announcement 1: Details about announcement 1.</p>
              <p>Announcement 2: Details about announcement 2.</p>
              {/* Add more announcements as needed */}
            </div>
          </div>

          <div className="careerSection">
            <h2>Careers</h2>
            <div className="careerContent">
              {/* Add your career content here */}
              <p>Career Opportunity 1: Details about career opportunity 1.</p>
              <p>Career Opportunity 2: Details about career opportunity 2.</p>
              {/* Add more career opportunities as needed */}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Announcement;
