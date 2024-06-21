import React from 'react';
import '../countingNumber/OnGoingProject.css'

const OnGoingProject = () => {
    const ongoingProjectData = [
        {
            name: 'Local Initiative for Community Empowerment & Development (LICED)',
            donor: 'ALWS, LWF Nepal',
            duration: '2020 - 2024',
            budget: '17,042,022/- For the year 2023',
            area: 'Bagmati RM Ward No. 3, 6, 7 and Godawari Municipality Ward No. 5, 6, 7, 9',
        },
        {
            name: 'Economic Recovery Project (ERP)',
            donor: 'DFAT, LWF Nepal',
            duration: 'June 2021 - June 2023',
            budget: '3,881,000/-',
            area: 'Bagmati RM and Godawari Municipality',
        },
    ];

    return (
        <div className='onGoingProjectContainer'>
            <div className="container">
                <h2>Ongoing Projects</h2>
                <table className="projectTable">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name of the projects</th>
                            <th>Donor/Partners</th>
                            <th>Project Duration</th>
                            <th>Budget (NPR)</th>
                            <th>Project Area</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ongoingProjectData.map((project, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{project.name}</td>
                                <td>{project.donor}</td>
                                <td>{project.duration}</td>
                                <td>{project.budget}</td>
                                <td>{project.area}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OnGoingProject;
