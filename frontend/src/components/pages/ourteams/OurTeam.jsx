import React, { useEffect, useState } from 'react';
import '../ourteams/ourteam.css';
import toast from "react-hot-toast";
import axios from "axios";
import Loader from '../../../loader/Loader';

const OurTeam = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/allUser`);
      if (response.data.success) {
        setAllUsers(response.data.users);
        setLoading(false); // Set loading to false after data is fetched
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) { // Show loader if data is loading
    return <Loader />;
  }

  const staffMembers = allUsers.filter(user => user.stafforBoardMember === 'staff');
  const boardMembers = allUsers.filter(user => user.stafforBoardMember === 'board_member');

  return (
    <div className="ourTeam_container">
      <div className="container teamHeading">
        <p>Our Team</p>
        <h2>Meet the Brilliant Minds Behind our <br /> Successful Campaigns</h2>

       

       <div className='boardMember'>
       <div className="ourTeam_section">
          <h3>Board Members</h3>
          <div className="ourTeam">
            {boardMembers.map((boardMember) => (
              <div className="ourTeam_card" key={boardMember.id}>
                <img src={boardMember.image} alt="board member image" />
                <h3>{boardMember.name}</h3>
                <p>{boardMember.position}</p>
              </div>
            ))}
          </div>
        </div>
       </div>


        <div className="ourTeam_section">
          <h3>Staff Members</h3>
          <div className="ourTeam">
            {staffMembers.map((staff) => (
              <div className="ourTeam_card" key={staff.id}>
                <img src={staff.image} alt="staff member image" />
                <h3>{staff.name}</h3>
                <p>{staff.position}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OurTeam;
