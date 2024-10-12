import React, { useRef, useEffect } from 'react'; // Add useRef and useEffect here
import './HeroSection.css';
import Form from './Form';
import IndustryLogos from './IndustryLogos';
import { Link, useLocation } from 'react-router-dom';

const HeroSection = ({ showPrograms }) => {
  const programsRef = useRef(null); // Create a ref for the programs container
  const location = useLocation();
  useEffect(() => {
    // Scroll to programs section if showPrograms prop is true
    if (showPrograms || location.pathname === '/programs') {
      programsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showPrograms, location.pathname]); 
 
  return (
    <div className="page-container">
      {/* Unified Hero and Gallery Section */}
      <section className="unified-hero-gallery">
        <div className="hero-section">
          <div className="left-section">
            <IndustryLogos />
          </div>
          <div className="right-section">
            <Form />
          </div>
          <br />
          <br /> 
        </div>
        
        
        <div className="gallery-content">
        <h2 id="Photos-Gallery">Photos Gallery </h2>
          <p></p>
        </div>
      </section>

      {/* Unified Programs and Certifications Section */}
      <section className="unified-programs-certifications" ref={programsRef} id="programs">
      <h2>
  <img 
    src="/certification0.png" 
    alt="" 
    style={{ width: '80%', height: '110px' ,marginTop: '30px', paddingleft: '-80px' }} // Adjust the width and height as needed
  />
</h2>
        <div className="programs-container">
          <div className="programs-flex">

            {/* Program 1 */}
            <div className="program-item">
              <img src="/program1.png" alt="Program 1" className="program-image" />
              <h3 style={{ color: 'white'  }}>Coding <br />Saksham</h3>
              <Link to="/program1-details">
                <button className="details-button">View Details</button>
              </Link>
            </div>

            {/* Program 2 */}
            <div className="program-item">
              <img src="/program2.png" alt="Program 2" className="program-image" />
              <h3 style={{ color: 'white'  }}>Robo <br />Saksham</h3>
              <Link to="/program2-details">
                <button className="details-button">View Details</button>
              </Link>
            </div>

            {/* Program 3 */}
            <div className="program-item">
              <img src="/program3.png" alt="Program 3" className="program-image" />
              <h3 style={{ color: 'white'  }}>EV <br />Saksham</h3>
              <Link to="/program3-details">
                <button className="details-button">View Details</button>
              </Link>
            </div>

            {/* Program 4 */}
            <div className="program-item">
              <img src="/program4.png" alt="Program 4" className="program-image" />
              <h3 style={{ color: 'white'  }}>AI <br />Saksham</h3>
              <Link to="/program4-details">
                <button className="details-button">View Details</button>
              </Link>
            </div>
          </div>
            <br />
            <br />
            <br />

            <div className="image-section">
            <img src="/background07.png" alt="Your Description" style={{ width: '100%', height: 'auto' }} />

          <button
          className="Enroll"
          style={{
          color: 'Black',               // Text color
          backgroundColor: '#fdd535',   // Background color
          border: 'none',                // No border
          borderRadius: '25px',          // Rounded corners
          padding: '15px 150px',         // Vertical and horizontal padding
          margin: '10px',               // Margin around the button
          cursor: 'pointer'              // Pointer cursor on hover
          }}
>
  Enroll Now
</button>
          </div>
          <br />
          {/* Certifications Section */}
          <h2 id="certifications-section">Certifications </h2>
        <div className="certification-container">
          <div className="certification-flex">
            {/* Certification Items */}

            <div className="certification-container">
  <div className="certification-flex">
    <div className="certification-item">
      <img src="/certification1.png" alt="Certification 5" className="certification-image" />
      <h3>Certification 1</h3>
      <button className="details-button">View Details</button>
    </div>
    <div className="certification-item">
      <img src="/certification2.png" alt="Certification 2" className="certification-image" />
      <h3>Certification 2</h3>
      <button className="details-button">View Details</button>
    </div>
    <div className="certification-item">
      <img src="/certification3.png" alt="Certification 3" className="certification-image" />
      <h3>Certification 3</h3>
      <button className="details-button">View Details</button>
    </div>
    {<div className="certification-item">
      <img src="/certification4.png" alt="Certification 4" className="certification-image" />
      <h3>Certification 4</h3>
      <button className="details-button">View Details</button>
    </div>}
  </div>
</div>
          </div>
        </div>
        <div className="image-section" >
    <img src="/background08.png" alt=" " style={{ width: '100%', height: 'auto', position: 'relative', Top: '-30px' }} />
       
    <button
    className="Enroll"
    style={{
      color: 'Black',
      backgroundColor: '#fdd535',
      border: 'none',
      borderRadius: '25px',
      padding: '15px 150px',
      margin: '10px',
      cursor: 'pointer'
    }}
  >
    Enroll Now
     </button>
     </div>
     <br />
     <br />
     <br />
     <div className="image-section" >
    <img src="/experts.png" alt=" " style={{ width: '100%', height: 'auto', position: 'relative', Top: '10px' }} />

    <button
    className="Enroll"
    style={{
      color: 'Black',
      backgroundColor: '#fdd535',
      border: 'none',
      borderRadius: '25px',
      padding: '15px 150px',
      margin: '10px',
      cursor: 'pointer'
    }}
  >
    Enroll Now
     </button>
      </div> 

          <div className="image-section">
            <br />
            <br />
            <img src="/Aboutus1.png" alt="" style={{ width: '100%', height: 'auto', paddingTop: '5px' }} />
            <img src="/Aboutus2.png" alt="" style={{ width: '100%', height: 'auto', paddingTop: '5px' }} />
          </div>
             
        </div>
        <footer className="footer">
  <p><i>© 2024 Capabl India. All Rights Reserved. Created by Altaf Shaikh.</i></p>
</footer>

      
      </section>
    </div>
  );
};

export default HeroSection;