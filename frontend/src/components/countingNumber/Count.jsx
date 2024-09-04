// Count.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './count.css';

const Count = () => {
  const navigate = useNavigate();
  const [countData, setCountData] = useState([
    { label: 'Project completed', count: 10, animated: false, route: '/project-completed' },
    { label: 'On Going Project', count: 20, animated: false, route: '/ongoing-project' },
    { label: 'Members', count: 12, animated: false, route: '/members' },
    { label: 'Awards', count: 8, animated: false, route: null },
  ]);

  useEffect(() => {
    const countElements = document.querySelectorAll('.count h2');
    const speed = 200; // Speed of counting animation in milliseconds

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const countElementsOffsets = Array.from(countElements).map(element => element.getBoundingClientRect().top);
      const triggers = countElementsOffsets.map(offset => offset - windowHeight);

      const handleCount = () => {
        countElements.forEach((element, index) => {
          if (!countData[index].animated && window.pageYOffset > triggers[index]) {
            setCountData(prevData => {
              const newData = [...prevData];
              newData[index] = { ...newData[index], animated: true };

              const targetCount = newData[index].count;
              let currentCount = 0;

              const countInterval = setInterval(() => {
                currentCount++;
                element.textContent = currentCount.toLocaleString() + '+';

                if (currentCount === targetCount) {
                  clearInterval(countInterval);
                }
              }, speed / targetCount);

              return newData;
            });
          }
        });
      };

      handleCount();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [countData]);

  const handleClick = (route) => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="count_container">
      <div className='count'>
        {countData.map((data, index) => (
          <div 
            className='count_content' 
            key={index} 
            onClick={() => handleClick(data.route)}
            style={{ cursor: data.route ? 'pointer' : 'default' }}
          >
            <h2>{data.animated ? data.count.toLocaleString() + '+' : '0+'}</h2>
            <p>{data.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;
