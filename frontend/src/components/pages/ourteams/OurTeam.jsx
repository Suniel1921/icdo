import React, { useEffect, useState } from 'react';
import '../ourteams/ourteam.css';
import toast from "react-hot-toast";
import axios from "axios";

const OurTeam = () => {

  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/allUser`);
      if(response.data.success) {
        setAllUsers(response.data.users);
      }
    } catch (error) {
      if(error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="ourTeam_container">
      <div className="container teamHeading">
        <p>Our Team</p>
        <h2>Meet the brilliant minds behind our <br /> successful campaigns</h2>
        <div className="ourTeam">
          {allUsers.map((staff) => (
            <div className="ourTeam_card" key={staff.id}>
              <img src={staff.image} alt="our team image" />
              <h3>{staff.name}</h3>
              <p>{staff.position}</p>
              <p>{staff.gender}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
