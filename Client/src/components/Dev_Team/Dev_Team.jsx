import React from 'react';
import './Dev_Team.css';
import { NavLink, useNavigate } from 'react-router-dom';

export const Dev_Team = () => {
    const navigate = useNavigate();
    const teamMembers = [
        { name: 'YuvarajT', role: 'Full-stack Developer', Rno: 2021115124 },
        { name: 'Shanthapriya', role: 'Full-stack Developer', Rno: 2021115100 }
    ];

    const universityInfo = {
        name: 'Anna University',
        department: 'CEG',
        city: 'Chennai',
        pincode: '600025'
    };

    const guide = {
        name: 'Bama Srinivasan',
        designation: 'Assistant Professor'
    };

    return (
        <div className="team-container">
            <h2 className="team-title">Development Team</h2>
            <p className="team-description">
                Insight-Arithmetic is created by a collaborative team of 3rd-year B.Tech IT students from {universityInfo.name},
                {universityInfo.department}, {universityInfo.city}, {universityInfo.pincode}.
            </p>
            <h3>Team Members</h3>
            <ul className="team-member-list">
                <div className="top-cover">
                    {teamMembers.map(member => (
                        <li key={member.name}>

                            {member.name} - {member.role} (Rollno: {member.Rno})

                        </li>
                    ))}
                </div>
            </ul>
            <h3>Under the Guidance of</h3>
            <p className="guide-info">
                {guide.name}, {guide.designation}
            </p>
            <NavLink to={navigate(-1)}>Back </NavLink>
        </div>
    );
};

export default Dev_Team;
