// import React, { useState, useEffect } from 'react';
// import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
// import axios from 'axios';

// const COLORS = ['#0088FE', '#FF69B4'];

// const PiChart = () => {
//   const [malePercentage, setMalePercentage] = useState(0);
//   const [femalePercentage, setFemalePercentage] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/allUser`);
//         const data = response.data; // Assuming the data is directly in response.data

//         if (!data || !data.users || !Array.isArray(data.users)) {
//           console.error('Invalid response format:', data);
//           return;
//         }

//         const { users } = data;

//         // Calculate number of male and female users
//         const maleUsers = users.filter(user => user.gender === 'male').length;
//         const femaleUsers = users.filter(user => user.gender === 'female').length;
//         const totalUsers = maleUsers + femaleUsers;

//         // Calculate percentages
//         const malePercentage = (maleUsers / totalUsers) * 100;
//         const femalePercentage = (femaleUsers / totalUsers) * 100;

//         // Update state with the percentages
//         setMalePercentage(malePercentage);
//         setFemalePercentage(femalePercentage);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const data = [
//     { name: 'Male', value: malePercentage },
//     { name: 'Female', value: femalePercentage },
//   ];

//   const RADIAN = Math.PI / 180;

//   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//       <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };

//   return (
//     <ResponsiveContainer width="99%" height="99%">
//       <PieChart width={200} height={200}>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           labelLine={false}
//           label={renderCustomizedLabel}
//           outerRadius={80}
//           fill="#8884d8"
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default PiChart;






import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import axios from 'axios';

const MALE_COLOR = '#0088FE'; // Blue
const FEMALE_COLOR = '#FF69B4'; // Pink

const PiChart = () => {
  const [malePercentage, setMalePercentage] = useState(0);
  const [femalePercentage, setFemalePercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/upload/allUser`);
        const data = response.data;

        if (!data || !data.users || !Array.isArray(data.users)) {
          console.error('Invalid response format:', data);
          return;
        }

        const { users } = data;

        // Calculate number of male and female users
        const maleUsers = users.filter(user => user.gender === 'male').length;
        const femaleUsers = users.filter(user => user.gender === 'female').length;
        const totalUsers = maleUsers + femaleUsers;

        // Calculate percentages
        const malePercentage = (maleUsers / totalUsers) * 100;
        const femalePercentage = (femaleUsers / totalUsers) * 100;

        // Update state with the percentages
        setMalePercentage(malePercentage);
        setFemalePercentage(femalePercentage);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  const data = [
    { name: 'Male', value: malePercentage },
    { name: 'Female', value: femalePercentage },
  ];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '5px' }}>
        <span style={{ color: MALE_COLOR }}>Male</span> | <span style={{ color: FEMALE_COLOR }}>Female</span>
      </div>
      <ResponsiveContainer width="99%" height="90%">
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === 'Male' ? MALE_COLOR : FEMALE_COLOR} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
    </>
  );
};

export default PiChart;


