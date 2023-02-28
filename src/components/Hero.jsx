import React from 'react';

import polygonHalf from '../assets/Home/HalfPolygon.svg';
import polygon from '../assets/Home/Polygon.svg';
import BigLogo from '../assets/Home/BigLogo.svg';
import apple from '../assets/Home/appstore.svg';
import apple1 from '../assets/Home/appstore1.svg';
import group from '../assets/Home/Group.svg';
import playStore from '../assets/Home/googleplay.svg';
import playStore1 from '../assets/Home/googleplay1.svg';
import ellipse from '../assets/Home/Ellipse.svg';
import mobile from '../assets/Home/Mobile.svg';
import mobile2 from '../assets/Home/Mobile2.svg';
import mobile3 from '../assets/Home/Mobile3.svg';
import logoHPH from '../assets/Home/LogoHPH.svg';
import rightSign from '../assets/Home/RightSign.svg';
import building from '../assets/Home/building.svg';
import building1 from '../assets/Home/building1.svg';
import vault from '../assets/Home/Vault.svg';

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
            <h1 className="homeProperty">Your Home + Property on Your Device</h1>
            <h3 className="waitIsOver">the wait is over.</h3>
          </div>
          <div>
            <p className="mail">
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
      <div className="section">
        <div className="left-section">
          <h1 className="propertyHub">Your Home + Property Hub</h1>
          <div className="divider" />
          <p className="propertyPara">
            With the explosion of homeowner renovations fueled by numerous DIY and HGTV shows and
            access to an abundance of design ideas on the internet, now more than ever, homeowners
            want and need an easy-to-use mobile app to chronicle their home improvements, organize
            their expenditures, record maintenance, and track their investments in all their
            property.
          </p>
        </div>
        <div className="ellipse-div">
          <img src={ellipse} alt="" />
        </div>
      </div>
      <div className="mobile-section">
        <div className="mobile-div">
          <h1 className="whyHPH">Why HPH?</h1>
          <div className="mobile">
            <img src={mobile} alt="" />
          </div>
        </div>
        <div className="rightSection">
          <div>
            <img src={logoHPH} alt="" />
          </div>
          <h1 className="Easy">EASY & FUN WAY TO ORGANIZE ALL YOUR PROPERTY</h1>
          <div className="divider-2" />
          <p className="easyPara">
            Home Property Hub is a <span className="italic">simple to use</span> mobile app that{' '}
            <span className="italic">inspires</span> organization and creativity and{' '}
            <span className="italic">helps</span> you care for your most valuable assets - your home
            and property.
          </p>
        </div>
      </div>
      <div className="mobile-section middle">
        <div className="WhoShouldUse-div">
          <h1 className="WhoShouldUse">who should use hph?</h1>
          <p className="WhoShouldUsePara">
            Homeowners who take pride in and want to document their DIY and design projects.
          </p>
          <div className="divider-2 small" />
          <p className="WhoShouldUsePara">
            Existing Homeowners who have made many improvements over the years and want an
            easy-to-use app to organize and track past and future projects.
          </p>
          <div className="divider-2 small" />
          <p className="WhoShouldUsePara">
            Homeowners with multiple properties (e.g., “snowbirds” or those taking care of an aging
            parent) who struggle to keep track of what has been done and what needs to be done at
            each location.
          </p>
          <div className="divider-2 small" />
          <p className="WhoShouldUsePara">
            New Homeowners who want to record maintenance, use pre-populated lists or create custom
            lists, and want the convenience to set up text and email reminders with calendar
            integrations.{' '}
          </p>
          <div className="divider-2 small" />
          <p className="WhoShouldUsePara">
            Homeowners concerned about justifying the cost basis of their house for future sale,
            inheritance, or filing insurance claims in the case of a loss of the property or the
            contents.{' '}
          </p>
          <div className="divider-2 small" />
          <p className="WhoShouldUsePara">
            Homeowners who are meticulous about the maintenance and improvement of their properties.
          </p>
        </div>
        <div>
          <img src={mobile2} alt="mobile2" />
        </div>
      </div>
      <div className="mobile-section coloumn">
        <h1 className="realEstate">Real Estate Agents</h1>
        <p className="realEstatePara">
          Learn how you can provide this app as a gift to your clients.
        </p>
        <div className="realEstateBtn-div">
          <button type="button" className="realEstateBtn">
            Go To Real Estate Agent Website
          </button>
          <img className="right" src={rightSign} alt="" />
        </div>
      </div>
      <div className="backgroundBlack">
        <div className="inner-div">
          <h1 className="features">Features</h1>
          <div className="divider-2 wid" />
          <div className="full-content">
            <div className="left-content">
              <div className="individual-content">
                <img src={building} alt="building" />
                <p className="contentPara">
                  A simple and fun to use powerful mobile app that provides homeowners with the
                  ability to document all things relating to home and property
                </p>
              </div>
              <div className="individual-content">
                <img src={building} alt="building" />
                <p className="contentPara">
                  Easily upload photos/videos of interior/exterior home renovations and updates
                </p>
              </div>
              <div className="individual-content">
                <img src={building} alt="building" />
                <p className="contentPara">
                  Use pre-made maintenance checklists or create your own, invite members and create
                  calendar and text reminders
                </p>
              </div>
              <div className="individual-content">
                <img src={building} alt="building" />
                <p className="contentPara">
                  Store receipts, invoices, manuals, and warranty information
                </p>
              </div>
              <div className="individual-content">
                <img src={building} alt="building" />
                <p className="contentPara">Track costs of improvements and updates</p>
              </div>
              <div className="individual-content">
                <img src={building} alt="building" />
                <p className="contentPara">
                  Upload photos/video of vehicles, equipment, household inventory items, furniture,
                  décor, collectibles, jewelry, wardrobe and more
                </p>
              </div>
              <div className="device">
                <h1 className="devicePara">YOUR HOME + PROPERTY ON YOUR DEVICE</h1>
                <div className="socialBtns">
                  <img src={apple1} alt="" />
                  <img src={playStore1} alt="" />
                </div>
              </div>
            </div>
            <div className="left-content">
              <div className="individual-content">
                <img src={building1} alt="building" />
                <p className="contentPara">
                  A simple and fun to use powerful mobile app that provides homeowners with the
                  ability to document all things relating to home and property
                </p>
              </div>
              <div className="individual-content">
                <img src={building1} alt="building" />
                <p className="contentPara">
                  User has the ability to share property data with another user in the case of a
                  sale or the need to supply a relative or friend with property info.
                </p>
              </div>
              <div className="individual-content">
                <img src={building1} alt="building" />
                <p className="contentPara">
                  Easily purchased and downloaded on smart phones, iPads, tablets and other mobile
                  devices through the IOS and Android app stores
                </p>
              </div>
              <div>
                <img src={mobile3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing">
        <h1 className="price">Pricing</h1>
        <div className="divider-2" />
        <h2 className="homeOwner">homeowner subscription options</h2>
        <p className="trial">Free 30-day trial!</p>
        <div className="allBoxes">
          <div className="box">
            <div className="boxUpper">
              <h1 className="base">Base</h1>
            </div>
            <div className="boxLower">
              <h1 className="amount">
                $34.99<span className="year">/year</span>
              </h1>
              <ul>
                <li className="listItems">4 Real Estate Properties</li>
                <li className="listItems">5 Vehicles </li>
                <li className="listItems">15 Equipment</li>
                <li className="listItems">75 Belongings</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="boxUpper">
              <h1 className="base">Plus</h1>
            </div>
            <div className="boxLower">
              <h1 className="amount">
                $44.99<span className="year">/year</span>
              </h1>
              <ul>
                <li className="listItems">5 Real Estate Properties</li>
                <li className="listItems">10 Vehicles </li>
                <li className="listItems">35 Equipment</li>
                <li className="listItems">20 Belongings</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="boxUpper">
              <h1 className="base">premium</h1>
            </div>
            <div className="boxLower">
              <h1 className="amount">
                $34.99<span className="year">/year</span>
              </h1>
              <ul>
                <li className="listItems">7 Real Estate Properties</li>
                <li className="listItems">15 Vehicles </li>
                <li className="listItems">50 Equipment</li>
                <li className="listItems">400 Belongings</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1 className="price">FAQ</h1>
          <div className="divider-2" />
          <div className="QA">
            <h1 className="question">Q | How long will I have access to my data?</h1>
            <h1 className="answer">
              <span className="A">A |</span> For as long as you renew your annual subscription. If
              you cancel, we will retain your information for 2 years before we delete it. We think
              you will miss us and want to come back.
            </h1>
          </div>
          <div className="QA">
            <h1 className="question">Q | Is my information secure?</h1>
            <h1 className="answer">
              <span className="A">A |</span> Our mobile app was built with our partner
              Crowdbotics.Applications built on Crowdbotics move millions ofdollars in funds,
              deliver confidential personalhealth information in hospitals, and serve in a variety
              ofhigh-security, mission critical contexts.This article will help you understand how
              Crowdboticshandles security, and ways that you can ensurethat your apps are secure.
            </h1>
          </div>
        </div>
      </div>
      <div className="Encryption">
        <div className="left-encrypt">
          <h1 className="encrypt">Encryption</h1>
          <div className="divider-2" />
          <p className="encyptPara">
            Crowdbotics offers bank-grade encryption for data on all paid plans. In particular, data
            is secured in transit using 256-bit AES encryption and SSL technology, which is the same
            level of encryption used by financial institutions when transmitting secure information,
            and the US government when transmitting secret information. Secure HTTPS endpoints are
            used whenever transmitting information. Additionally, Advanced Plan (and above) users
            have access to encrypted databases, which provide encryption of all data at rest.
          </p>
          <h1 className="encrypt">Apps are Containerized and Private</h1>
          <div className="divider-2" />
          <p className="encyptPara">
            Crowdbotics offers bank-grade encryption for data on all paid plans. In particular, data
            is secured in transit using 256-bit AES encryption and SSL technology, which is the same
            level of encryption used by financial institutions when transmitting secure information,
            and the US government when transmitting secret information. Secure HTTPS endpoints are
            used whenever transmitting information. Additionally, Advanced Plan (and above) users
            have access to encrypted databases, which provide encryption of all data at rest.
          </p>
        </div>
        <div>
          <img src={vault} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
