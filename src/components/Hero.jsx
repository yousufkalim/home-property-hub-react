import React from 'react';

import polygonHalf from '../assets/Home/HalfPolygon.svg';
import polygon from '../assets/Home/Polygon.svg';
import BigLogo from '../assets/Home/BigLogo.svg';
import apple from '../assets/Home/appstore.svg';
import group from '../assets/Home/Group.svg';
import playStore from '../assets/Home/googleplay.svg';

function Hero() {
  return (
    <div className="main-hero">
      <div className="center">
        <div className="polygonHalf-div">
          <img className="polygon-img" src={polygonHalf} alt="" />
        </div>
        <div className="heading-logo">
          <div>
            <img src={BigLogo} alt="" />
          </div>
          <div className="Homeproperty-heading">
            <h1>Your Home + Property on Your Device</h1>
            <h3>the wait is over.</h3>
          </div>
          <div>
            <p>
              Join our Mailing List to receive updates and information on the official launch of the
              app and receive a code for $5 off.
            </p>
            <div className="email-div">
              <input className="email-input" type="text" placeholder="Email address" />
              <button className="join-btn" type="button">
                Join
              </button>
            </div>
            <div className="store-buttons">
              <div>
                <img src={apple} alt="" />
              </div>
              <div>
                <img src={playStore} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div>
            <img src={polygon} alt="" />
          </div>
        </div>
      </div>
      <div className="group-div">
        <img className="group-img" src={group} alt="" />
      </div>
    </div>
  );
}

export default Hero;
