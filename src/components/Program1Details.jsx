import React from 'react';
import './Program1Details.css'; 

const Program1Details = () => {
  return (


    
    <div className="program-details-container">
      {/* Section 1: Program Overview */}

      
      <h2 style={{ color: 'white'  }}>Coding Saksham<hr /></h2>

      <div className="section-block">
        <h2>Program Overview <hr /></h2>
        <ul>
          <li>Learn web app development from Microsoft experts</li>
          <li>Create a web app with a team of 2-4 members</li>
          <li>Compete in a campus code-a-thon, impress Microsoft judges</li>
          <li>College-level top teams win internship opportunities and prizes</li>
        </ul>
      </div>

      {/* Section 2: Topics Covered */}
      <div className="section-block">
        <h2>Topics Covered  <hr /></h2>
        <ul>
          <li>HTML (designing web skeleton)</li>
          <li>CSS (styling web page)</li>
          <li>JavaScript (adding web interactivity)</li>
          <li>React (single-page web applications, virtual DOM)</li>
          <li>Bootstrap (CSS framework for efficient development)</li>
          <li>JQuery (JS framework for added interactivity)</li>
          <li>Redux (In-memory storage capability)</li>
         
        </ul>
      </div>

      {/* Section 3: More Details */}
      {/* Section 3: More Details */}
      <div className="section-block">
        <h2>Tools Used</h2>
        <p><hr /></p>
        <img 
          src="/section3.png" 
          alt="hello" 
          width="100%" 
          height="auto"
        />
      </div>

      {/* Section 4: Final Information */}
      <div className="section-block">
        <h2>Projects</h2>
        <p><hr /></p>
        <img 
          src="/section4.png" 
          alt="hello" 
          width="100%" 
          height="auto"
        />
      </div>

      {/* Buttons at the Bottom */}
      <div className="button-container">
        <button className="download-button">Download Brochure</button>
        <button className="enroll-button">Enroll Now</button>
      </div>
    </div>
  );
};

export default Program1Details;


