import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import groupImage from '../Images/Group.png';
import groupImage1 from '../Images/Group1.png';
// import groupImage2 from '../Images/Group2.png'
import groupImage3 from '../Images/Group3.png'; 
import groupImage4 from '../Images/Group4.png'; 

import './index.css';


const FirstPage = () => {
  return (
    <div className="container-fluid" style={{ padding: '20px' }}>
      <div className="row">
        <div className="col-md-4">
          <div className="content">
            <div className="header-row">
              <img src={groupImage} alt="Group" className="img-fluid" />
              <button className="button">Free Template</button>
            </div>
            <h1 className="title">App Landing Page Free</h1>
            <h2 className="subtitle">Super Awesome</h2>
            <p className="source">Source files</p>
            <img src={groupImage1} alt="Group" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${groupImage3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        <div className="col-md-4 d-flex align-items-end justify-content-end" style={{ backgroundImage: `url(${groupImage4})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;