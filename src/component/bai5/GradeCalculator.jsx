import React, { useState } from 'react';

const GradeCalculator = () => {
    const subjects = ['Toán học', 'Văn học', 'Lý học']; // Danh sách các môn học
    const [grades, setGrades] = useState({}); // Lưu trữ điểm số cho mỗi môn

    const handleGradeChange = (subject, grade) => {
        if (grade === '' || (parseInt(grade) >= 0 && parseInt(grade) <= 10)) {
            setGrades((prevGrades) => ({
                ...prevGrades,
                [subject]: grade
            }));
        }
    };

    const calculateTotalScore = () => {
        const totalScore = Object.values(grades)
            .filter(grade => grade !== '' && !isNaN(grade))
            .reduce((acc, grade) => acc + parseFloat(grade), 0);

        return totalScore.toFixed(2); // Hiển thị kết quả với hai chữ số sau dấu thập phân
    };

    return (
        <div>
            <h2>Grade Calculator</h2>
            {subjects.map((subject, index) => (
                <div key={index}>
                    <label>{subject}:</label>
                    <input
                        type="number"
                        step="0.05"
                        value={grades[subject] || ''}
                        onChange={(e) => handleGradeChange(subject, e.target.value)}
                    />
                </div>
            ))}
            <p>Total Score: {calculateTotalScore()}</p>
        </div>
    );
};

export default GradeCalculator;