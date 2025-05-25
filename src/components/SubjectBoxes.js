import React, { useState } from 'react';
import './SubjectBoxes.css'; // Assuming you have a CSS file for styling

const SubjectBoxes = ({ onSelectSubject }) => {
    const subjects = ["Physics", "Chemistry", "Maths", "Biology"];
    
    return (
        <div className="subject-boxes">
            {subjects.map((subject) => (
                <div 
                    key={subject} 
                    className="subject-box" 
                    onClick={() => onSelectSubject(subject)}
                >
                    {subject}
                </div>
            ))}
        </div>
    );
};

export default SubjectBoxes;