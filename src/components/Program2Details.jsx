import React from 'react';
import './Program2Details.css'; // Ensure the CSS file is linked correctly

const Program2Details = () => {
  return (
    <div className="program2-details-container">
      {/* Box 1 */}
      <h2 style={{ color: 'white'  }}>Robo Saksham<hr /></h2>
      <div className="section2-block">
        <h2>Program Overview</h2>
        <ul>
          <li>Learn IoT and robotics systems and industrial automation from Experts</li>
          <li>Create an internet-controlled vehicle project through Arduino in a team of 2-3 members</li>
          <li>Compete on Robo Challenge on your campus & impress the judges</li>
          <li>Top teams win internships opportunities and upskilling and Rs. 50000 worth of prize</li>
        </ul>
      </div>

      {/* Box 2 */}
      <div className="section2-block">
        <h2>Topics Covered</h2>
        <ul>
          <li>Introduction of Embedded System</li>
          <li>Blink LED, use of Switch, Arduino Serial. Operate Relay, automation, and robotics projects</li>
          <li>WiFi, PUTTY/HyperLink, WiFi Network.</li>
          <li>Connection with Website and fetch data to perform automation through Arduino</li>
          <li>Building Automated Bot controlled via Website</li>
          <li>Motor control via automation</li>
        </ul>
      </div>

      {/* Box 3 with six-line scrollable project box */}
      <div className="section2-block">
        <h2>Tools Used</h2>
        <p></p>
        <img 
          src="/viewdetails.png" 
          alt=" " 
          width="100%" 
          height="auto"
        />
        
      </div>

      {/* Box 4 */}
      <div className="section2-block">
        <h2>Projects</h2>

        <div className="project2-box">
          <ul>
            <li>Cinema Hall Capacity Display</li>
            <li>Load balancing of heavy equipment</li>
            <li>Project 3: EV Design</li>
            <li>Remote controlled Bot</li>
            <li>Control Home Appliances Using Bluetooth, Wifi & Webserver</li>
            <li>Running an automated Vehicle</li>
            <li>Sensor-based IoT Projects & Competition</li>
            {/* Add more projects if needed */}
          </ul>
        </div>
      </div>
      {/* Buttons at the Bottom */}
    <div className="button-container2">
    <button className="download-button2">Download Brochure</button>
    <button className="enroll-button2">Enroll Now</button>
  </div>
</div>
    
    
  );
};

export default Program2Details;
