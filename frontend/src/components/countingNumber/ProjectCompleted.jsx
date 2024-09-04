import React from 'react';
import '../countingNumber/ProjectCompleted.css';

const ProjectCompleted = () => {
    const projectData = [
        {
            name: 'Nepal Development Program (NDP) – Phase I',
            donor: 'LWF Nepal',
            budget: '2,82,25,558/-',
            duration: '2014 – 2019',
            area: 'Bagmati RM Ward No. 3, 6, 7 (Bhattedanda, Ashrang & Gimdi)',
        },
        {
            name: 'Livelihood Recovery of people affected by Earthquake (LIRE)',
            donor: 'LWF Nepal, The Primate’s World Relief & Development Fund, Canada',
            budget: '1,16,69,744/-',
            duration: 'July 2017 – Dec 2018',
            area: 'Bagmati RM Ward No. 1, 2 & 3 (Ghusel, Malta & Bhattedanda)',
        },
        {
            name: 'Nepal Earthquake Recovery, Reconstruction & Resilience (3R)/NPL-161',
            donor: 'ACT Alliance LWF Nepal',
            budget: '4,26,66,107/-',
            duration: 'July 2016- Dec. 2017',
            area: 'Chhampi, Lele, Bhattedanda, Ashrang & Gimdi of Lalitpur',
        },
        {
            name: 'Nepal Earthquake Response Program (NERP)',
            donor: 'Amity Foundation China, ACT Alliance LWF Nepal',
            budget: '5,66,76,150/-',
            duration: '2015- April 2016',
            area: 'Chhampi, Lele, Bhattedanda, Ashrang & Gimdi',
        },
        {
            name: 'Sustainable Livelihood Improvement Program (SLIP)',
            donor: 'The Lutheran World Federation (LWF), Nepal',
            budget: '1,21,33,768/-',
            duration: 'April 2010- Dec. 2013',
            area: '10 VDCs of Lalitpur',
        },
        {
            name: 'Vocational Skill and Development Training',
            donor: 'Under Ministry of Labour and Employment, Vocational and Skill Development Training Centre Bhainsepati, Lalitpur',
            budget: '3,36,000/-',
            duration: 'July 2013 to January 2014, January to July 2014',
            area: 'For the youth of Lalitpur',
        },
        {
            name: 'Green Carpet',
            donor: 'LWF Nepal',
            budget: '6,67,291/-',
            duration: '1 May-31 Dec 2012',
            area: 'Chapagaun',
        },
        {
            name: 'Advocacy for Women’s Economic Security Through Improving Access to and Control Over Land',
            donor: 'CSRC Nepal LWF Nepal',
            budget: '3,97,000/-',
            duration: 'Sep.1, 2011 to July 31, 2012',
            area: 'Lalitpur District (mostly program VDCs of SLIP project)',
        },
        {
            name: 'Economic Recovery Project (ERP)',
            donor: 'DFAT, LWF Nepal',
            budget: '3,881,000/-',
            duration: 'SJune 2021 - June 2023',
            area: 'Bagmati RM and Godawari Municipality',

        }
    ];

    return (
        <div className='projectCompletedContainer'>
            <div className="container">
                <h2>Completed Projects</h2>
                <table className="projectTable">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Project Name</th>
                            <th>Donor/Partners</th>
                            <th>Budget (NRP)</th>
                            <th>Project Duration</th>
                            <th>Project Area (Ward/VDCS)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projectData.map((project, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{project.name}</td>
                                <td>{project.donor}</td>
                                <td>{project.budget}</td>
                                <td>{project.duration}</td>
                                <td>{project.area}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectCompleted;
