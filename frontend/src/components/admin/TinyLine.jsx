
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TinyLine = () => {
  const [totalUsers, setTotalUsers] = useState(0); // State to store the total number of users

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/totalUser`); 
        const { count } = response.data;
        setTotalUsers(count); 
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };

    fetchTotalUsers(); 
  }, []);

  return (
    <div>
      <h2>Total Users: {totalUsers}</h2> 
    </div>
  );
};

export default TinyLine;

