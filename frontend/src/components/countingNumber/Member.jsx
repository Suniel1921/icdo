// Members.js
import React from 'react';
import '../countingNumber/member.css'

const Members = () => {
  const membersData = [
    // { name: 'John Doe', position: 'Project Manager' },
    { name: 'Gimdee Community Based Organization ' },
    { name: 'Ashrang Community Based Organization' },
    { name: 'Bhatta Danda Community Based Organization'},
    { name: 'DeviChaur Community Based Organization '},
    { name: 'Champi Community Based Organization '},
    { name: 'Melmilap Samaj ,Lele '},
    { name: 'JharuWarashai Community Based Organization '},
    { name: 'Chapagaun Community Based Organization'},
    { name: 'ChetanShil(Badikhel) Based Organization '},
    { name: 'GodamChaur Based Organization'},
    { name: 'Jagram Pragati Samaj'},
    { name: 'Sangam Bikash Samaj'},
  ];

  return (
    <div className='membersContainer'>
      <div className="container">
        <h2>Members</h2>
        <table className="membersTable">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              {/* <th>Position</th> */}
            </tr>
          </thead>
          <tbody>
            {membersData.map((member, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{member.name}</td>
                {/* <td>{member.position}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
