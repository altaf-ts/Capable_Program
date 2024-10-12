import React from 'react';
import './Program4Details.css'; // Ensure to link your CSS file

const Program4Details = () => {
  return (
    <div className="program4-details-container">
      {/* Box 1 */}
      <h2 style={{ color: 'white' }}>AI Saksham<hr /></h2>
      
      {/* Box 2: Program Overview */}
      <div className="section4-block">
        <h2>Program Overview</h2>
        <ul>
          <li>Learn Data Science, ML, and AI from Samsung, Microsoft, and Amazon experts</li>
          <li>Create a Data science project involving ML and AI with a team of 2-4 members</li>
          <li>Compete on AI-ML Challenges on your campus, impress Microsoft judge</li>
          <li>College-level top teams win internships opportunities and upskilling and Rs. 50,000 worth of prizes</li>
          <li>Top teams Present at India's Biggest National level Job-a-thon, win jobs opportunities and upskilling and 2 Lakhs+ in prizes.</li>
        </ul>
      </div>

      {/* Box 3: Topics Covered */}
      <div className="section4-block">
        <h2>Topics Covered</h2>
        <ul>
          <li>Python (implementation of basic control structures and functions)</li>
          <li> Numpy, Pandas (Data manipulation using data-frames) </li>
          <li>Seaborn, Matplotlib (Data visualisation)</li>
          <li>Exploratory data analysis (Univariate, Bivariate, and multi-variate analysis)</li>
          <li>Machine Learning</li>
          <li>Artificial Intelligence</li>
          <li>ML Algorithms</li>
          
        </ul>
      </div>

      {/* Box 4: Learning Objectives with scrollable project box */}
      <div className="section4-block">
        <h2>Tools Used</h2>
        
        <img 
          src="/section5.png" 
          alt=" " 
          width="100%" 
          height="auto"
        />
      
      </div>
      <div className="section4-block">
        <h2>Projects</h2>

        <div className="project4-box">
          <ul>
            <li>
              <p>Real-state price prediction (100acres, housing.com, magic tricks)</p>
            </li>
            
            <li>
              <p>Data visualization of the world’s Instagram usage + addiction data</p>
            </li>
            <li>
              <p>MPL / Fantasy League - Match result prediction</p>
            </li>
            <li>
              <p>Swiggy/Zomato delivery time prediction</p>
            </li>
            <li>
              <p>Create your beta-ChatGPT</p>
            </li>

            <li>
              <p>Stock market forecast</p>
            </li>

            <li>
              <p>Face detection artificial intelligence model</p>
            </li>
            
          </ul>
        </div>
      </div>

      {/* Buttons at the Bottom */}
      <div className="button-container4">
        <button className="download-button4">Download Brochure</button>
        <button className="enroll-button4">Enroll Now</button>
      </div>
    </div>
  );
};

export default Program4Details;
