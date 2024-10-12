// src/components/Form.js
import React, { useState } from 'react';
import './Form.css'; // Importing the CSS file for styling

const Form = () => {
  const [selectedProgram, setSelectedProgram] = useState(''); // State for selected program
  const [fee, setFee] = useState(null); // State for the program fee

  // Program to Fee mapping
  const programFeeMap = {
    'Coding Saksham': 10000, // Fee for Coding Saksham
    'Robo Saksham': 12000,   // Fee for Robo Saksham
    'EV Saksham': 13000,     // Fee for EV Saksham
    'AI Saksham': 14000,     // Fee for AI Saksham
  };

  // Handle Program change
  const handleProgramChange = (event) => {
    const program = event.target.value;
    setSelectedProgram(program);
    setFee(programFeeMap[program] || null); // Set the fee based on the selected program
  };

  // Function to format fee with commas
  const formatFee = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="form-container">
      <h2>Register Now</h2>
      <p>Start your journey with TechFusionX</p>
      <form>
        <select>
          <option>Select Venue</option>
          <option>HITAM, Hyderabad</option>
          <option>Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad</option>
          <option>SKCT, Coimbatore</option>
          <option>Karpagam Institute of Technology, Coimbatore</option>
          <option>MIT World Peace University, Pune</option>
          <option>JSPM University, Pune</option>
          <option>KPR Institute of Engineering Technology, Coimbatore</option>
          <option>REVA University, Bangalore</option>
          <option>Sinhgad College of Engineering, Pune</option>
          <option>Vishwakarma Institute of Information Technology, Pune</option>
          <option>DMI College of Engineering, Chennai</option>
          <option>Nutan Maharashtra Institute of Engineering and Technology, Talegaon</option>
          <option>Adi Shankara Institute of Engineering and Technology, Kalady</option>
          <option>Jyothi Engineering College, Cheruthuruthy</option>
        </select>

        {/* Updated Program Selection with onChange event */}
        <select onChange={handleProgramChange}>
          <option>Select Program</option>
          <option>Coding Saksham</option>
          <option>Robo Saksham</option>
          <option>EV Saksham</option>
          <option>AI Saksham</option>
        </select>

        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <input type="tel" placeholder="Enter your phone number" />
        <input type="text" placeholder="Enter your college name" />

        <select>
          <option>Select your department</option>
          <option>Aerospace</option>
          <option>Artificial Intelligence</option>
          <option>Automobile</option>
          <option>Bachelor of Business Administration (BBA)</option>
          <option>Bachelor of Computer Applications (BCA)</option>
          <option>Bachelor of Science (BSC)</option>
          <option>Biotechnology</option>
          <option>Civil</option>
          <option>Computer Science</option>
          <option>Cyber Security</option>
          <option>Data Science</option>
          <option>Electrical and Electronics (EEE)</option>
          <option>Electronics and Communication (ECE)</option>
          <option>IT/IS/IC</option>
          <option>Machine Learning</option>
          <option>Master of Business Administration (MBA)</option>
          <option>Master of Computer Applications (MCA)</option>
          <option>Master of Science (MSC)</option>
          <option>Mechanical/Production</option>
          <option>Mechatronics/Robotics</option>
        </select>

        <select>
          <option>Select your graduation year</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
        </select>

        {/* Display Selected Program */}
        {selectedProgram && (
          <div className="selected-program">
            <p>Selected Program: {selectedProgram}</p>
          </div>
        )}

        {/* Display Program Fee */}
        {fee !== null && (
          <div className="fee-section">
            <p>Program Fee: ₹{formatFee(fee)}</p>
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
