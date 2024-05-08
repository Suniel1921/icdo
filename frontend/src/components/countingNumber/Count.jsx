import React, { useState, useEffect } from 'react';
import '../countingNumber/count.css';

const Count = () => {
  const [countData, setCountData] = useState([
    { label: 'project completed', count: 10, animated: false },
    { label: 'on Going Project', count: 20, animated: false },
    { label: 'Happy Client', count: 100, animated: false },
    { label: 'awards', count: 8, animated: false },
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

  return (
    <div className="count_container">
      <div className='count'>
        {countData.map((data, index) => (
          <div className='count_content' key={index}>
            <h2>{data.animated ? data.count.toLocaleString() + '+' : '0+'}</h2>
            <p>{data.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;






















// import React, { useState, useEffect } from 'react';
// import '../countingNumber/count.css';

// const Count = () => {
//   const [animationTriggered, setAnimationTriggered] = useState(false);

//   useEffect(() => {
//     const countElements = document.querySelectorAll('.count h2');
//     const speed = 30; // Speed of counting animation in milliseconds

//     const handleCount = () => {
//       countElements.forEach((element, index) => {
//         const targetCount = parseInt(element.dataset.count, 10);
//         let currentCount = 0;

//         const countInterval = setInterval(() => {
//           currentCount++;
//           element.textContent = currentCount.toLocaleString() + "+";

//           if (currentCount === targetCount) {
//             clearInterval(countInterval);
//           }
//         }, speed / targetCount);
//       });
//     };

//     const handleScroll = () => {
//       if (!animationTriggered && isInViewport(countElements[0])) {
//         setAnimationTriggered(true);
//         handleCount();
//       }
//     };

//     const isInViewport = (el) => {
//       const rect = el.getBoundingClientRect();
//       return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//       );
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [animationTriggered]);

//   return (
//     <div className="count_container">
//       <div className='count'>
//         <div className='count_content'>
//           <h2 data-count="10">0+</h2>
//           <p>project completed</p>
//         </div>
//         <div className='count_content'>
//           <h2 data-count="100">0+</h2>
//           <p>Happy Client</p>
//         </div>
//         <div className='count_content'>
//           <h2 data-count="8">0+</h2>
//           <p>awards</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Count;
