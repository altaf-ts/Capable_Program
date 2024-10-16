import React, { useState } from 'react';
import './Form.css'; // Importing the CSS file for styling

const Form = () => {
  const [selectedCollege, setSelectedCollege] = useState(''); // State for selected college
  const [selectedProgram, setSelectedProgram] = useState(''); // State for selected program
  const [fee, setFee] = useState(null);
  
  const [originalFee, setOriginalFee] = useState(null);
  const [showFee, setShowFee] = useState(false); // State to toggle fee visibility
  const [couponCode, setCouponCode] = useState('');
  const [message, setMessage] = useState('');
    

  
  const validCoupons = ['Capabl07','1234', '102030','ABCD', '12345','CAPABL01',];
  



  // Mapping for programs based on selected college
  const collegeProgramMap = {
    'HITAM, Hyderabad': ['EV Saksham', 'AI Saksham'],
    'Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad': ['Coding Saksham', 'EV Saksham'],
    'SKCT, Coimbatore': ['Robo Saksham', 'AI Saksham'],
    'Karpagam Institute of Technology, Coimbatore': ['EV Saksham', 'Coding Saksham'],
    'MIT World Peace University, Pune': ['Coding Saksham', 'Robo Saksham', 'EV Saksham'],
    'JSPM University, Pune': ['AI Saksham'],
    'KPR Institute of Engineering Technology, Coimbatore': ['Coding Saksham'],
    'REVA University, Bangalore': ['Robo Saksham', 'AI Saksham'],
    'Sinhgad College of Engineering, Pune': ['EV Saksham', 'AI Saksham'],
    'Vishwakarma Institute of Information Technology, Pune': ['Coding Saksham', 'EV Saksham'],
    'DMI College of Engineering, Chennai': ['AI Saksham'],
    'Nutan Maharashtra Institute of Engineering and Technology, Talegaon': ['EV Saksham', 'Coding Saksham'],
    'Adi Shankara Institute of Engineering and Technology, Kalady': ['Robo Saksham'],
    'Jyothi Engineering College, Cheruthuruthy': ['EV Saksham'],
    'Amity University, Noida': ['AI Saksham', 'Robo Saksham'],
    'SRM Institute of Science and Technology, Chennai': ['Coding Saksham', 'EV Saksham'],
    'PES University, Bangalore': ['Robo Saksham', 'AI Saksham'],
    'Thakur College of Engineering, Mumbai': ['Coding Saksham'],
    'Lovely Professional University, Punjab': ['EV Saksham', 'AI Saksham'],
    'Manipal Institute of Technology, Manipal': ['Robo Saksham', 'Coding Saksham'],
    'SASTRA University, Tamil Nadu': ['AI Saksham'],
    'Indian Institute of Technology, Kharagpur': ['EV Saksham', 'Coding Saksham', 'AI Saksham'],
    'BITS Pilani, Goa': ['Robo Saksham'],
    'Jawaharlal Nehru Technological University, Hyderabad': ['Coding Saksham', 'EV Saksham'],
  };

  // Program to Fee mapping
  const programFeeMap = {
    'Coding Saksham': 10000,
    'Robo Saksham': 12000,
    'EV Saksham': 13000,
    'AI Saksham': 14000,
  };

  // Handle college change
  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
    setSelectedProgram(''); // Reset program selection on college change
    setFee(null); // Reset fee on college change
    setShowFee(false); // Hide fee on college change
    
  };

  // Handle program change
  const handleProgramChange = (event) => {
    const program = event.target.value;
    setSelectedProgram(program);
    const programFee = programFeeMap[program] || null; // Get the program fee
    setFee(programFee); // Set the fee based on the selected program
    setOriginalFee(programFee); // Store the original fee
    setShowFee(false); // Keep fee hidden after selecting the program
  };

  // Toggle fee visibility
  const toggleFee = () => {
    setShowFee((prev) => !prev); // Toggle the visibility state
  };

  // Function to format fee with commas
  const formatFee = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const applyCoupon = () => {
    if (validCoupons.includes(couponCode)) {
      setFee(originalFee - 200); // Reduce ₹200 from the original fee
      setMessage('Coupon applied! ₹200 discount has been applied.');
    } else {
      setFee(originalFee); // Reset fee to original amount if coupon is invalid
      setMessage('Invalid coupon code!');
    }
  };


  

  

  

  return (
    <div className="form-container">
      <h2>Register Now</h2>
      <p style={{ textAlign: 'left', color: 'white', fontFamily: 'Times New Roman',fontSize: '1.2em', marginLeft: '0px',marginTop: '5px' }}>
        Start your journey with TechFusionX
      </p>

      <form>
        {/* College selection */}
        <select onChange={handleCollegeChange}>
          <option>Select Venue/college</option>
          {Object.keys(collegeProgramMap).map((college) => (
            <option key={college} value={college}>
              {college}
            </option>
          ))}
        </select>

        {/* Program selection, dynamically rendered based on selected college */}
        {selectedCollege && collegeProgramMap[selectedCollege] && (
          <select onChange={handleProgramChange}>
            <option>Select Program</option>
            {collegeProgramMap[selectedCollege].map((program) => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
          </select>
        )}

         

        <input type="text" placeholder="Enter your name" required />
        <input type="email" placeholder="Enter your email" required />
        <input type="tel" placeholder="Enter your phone number" required />
        <input type="text" placeholder="Enter your college name if it not in above list" required />

        {/* Additional details */}
        <select required>
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

        <select required>
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
            <p style={{ textAlign: 'left', fontSize: '1.0em',color: '#fdd535',marginLeft: '10px' }}>Selected Program: {selectedProgram}</p>
          </div>
        )}

        {/* Toggle Fee Visibility */}
        {fee !== null && (
          <div className="fee-section">
        <button
          type="button"
          onClick={toggleFee}
          style={{
        float: 'right',
        fontSize: '0.8em',
        padding: '10px 15px',
        backgroundColor: '#fdd535',
        color: 'black',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        marginTop: '-70px',
        position: 'relative',
        left: '-30px',
        }}
      >
      {showFee ? 'Hide Fee' : 'Show Fee'} {/* Button label changes based on state */}
    </button>
    {showFee && (
      <div style={{ marginTop: '10px', color: 'white', fontSize: '1em' }}>
       <p style={{ marginTop: '-45px', marginLeft: '-235px', color: 'white', fontSize: '1em' }}>Program Fee: ₹{formatFee(fee)}</p>
        <p style={{ marginTop: '-10px', marginLeft: '-210px', color: 'white', fontSize: '1em' }}>Enter Coupon:</p>
        <input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode} // Assuming couponCode is stored in state
          onChange={(e) => setCouponCode(e.target.value)}

        style={{
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '10px',
        width: '30%', // Adjusted width for better alignment
        // Adjusted left margin for spacing
        marginRight: '40px',
        marginTop: '-450px',
        marginLeft: '-155px',
        display: 'inline-block',
        position: 'relative'
    
      }}
        />

          <button
          type="button"
          style={{
            padding: '5px 15px',
            backgroundColor: '#fdd535', // Green background for Apply button
            color: 'Black',
            border: 'none',
            borderRadius: '15px',
            cursor: 'pointer',
            fontSize: '0.9em', // Slightly smaller font size
          }}
          onClick={() => applyCoupon(couponCode)} // Call the applyCoupon function on click
          >
         Apply
        </button>

         {/* Message about coupon validity */}
      {message && (
        <p style={{ color: 'yellow', marginTop: '10px', fontSize: '1em' }}>{message}</p>
      )}

      </div>
      )} {/* Show fee and coupon input only if showFee is true */}
      </div>
      )}

 

        <button type="submit">Submit</button>
       
      </form>
    </div>
  );
};

export default Form;
