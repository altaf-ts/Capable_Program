import React from 'react';
import './Program3Details.css'; // Ensure to link your CSS file

const Program3Details = () => {
  return (
    <div className="program3-details-container">
      {/* Box 1 */}
      <h2 style={{ color: 'white' }}>EV Design & Development<hr /></h2>
      
      {/* Box 2: Program Overview */}
      <div className="section3-block">
        <h2>Program Overview</h2>
        <ul>
          <li>Learn EV Design & Development from Mahindra Electric, Ather, etc. experts</li>
          <li>Fabricate a fully functional EV Formula 5 Race Vehicle</li>
          <li>Compete on EV Design Challenges on your campus, impress the judges</li>
          <li>Top teams win industrial internship opportunities, upskilling, and Rs. 50,000 worth of prizes</li>
        </ul>
      </div>

      {/* Box 3: Topics Covered */}
      <div className="section3-block">
        <h2>Topics Covered</h2>
        <ul>
          <li>Dynamics and Design of Suspension, Steering & Braking</li>
          <li> CSS (styling web page) </li>
          <li>Sub-system level Design of Transmission System</li>
          <li>Battery Design and Battery Management System</li>
          <li>Applications of Power Electronics</li>
          <li>Fabrication of roll cage frame & chassis</li>
          <li>EV Battery, Motor & Controller Assembly</li>
          <li>Installation of Brakes, Suspension & Steering system &</li>
          <li>Test Run by each participant of fabricated EV Formula Race Vehicle.</li>
        </ul>
      </div>

      {/* Box 4: Learning Objectives with scrollable project box */}
      <div className="section3-block">
        <h2>Tools Used</h2>
        
        <img 
          src="/viewdetails3.png" 
          alt=" " 
          width="100%" 
          height="auto"
        />
      
      </div>
      <div className="section2-block">
        <h2>Projects</h2>

        <div className="project2-box">
          <ul>
            <li>
            <p>Software design of double wishbone suspension, rack & pinion steering, disc braking, real axle transmission, and Li-ion battery pack.</p>
           <li> <p>Hardware: A team of 25-30 students will be fabricating one fully functional Formula 5 Electric Vehicle following the step-by-step fabrication process.</p></li>
            {/* Add more projects if needed */}
            </li>
          </ul>
        </div>
      </div>

      {/* Buttons at the Bottom */}
      <div className="button-container3">
        <button className="download-button3">Download Brochure</button>
        <button className="enroll-button3">Enroll Now</button>
      </div>
    </div>
  );
};

export default Program3Details;
