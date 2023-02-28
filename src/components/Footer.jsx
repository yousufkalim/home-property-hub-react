/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
import React from 'react';
import EmailImg from '../assets/EmailImg.svg';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_center">
        <div className="Footer_col">
          <div className="footer_left_content">
            <p className="footer_left_heading">
              Mortgage Brokers,Insurance Agents, Estate Attorneys & Financial Planners&nbsp;
              <span className="footer_left_span">
                contact us for information on discounted packages for branded client appreciation
                gifts
              </span>
            </p>
            <div className="footer_mail_box">
              <div>
                <p className="footer_mail_box_title">Email contact</p>
                <p className="footer_mail_box_p">hello@homeproperyhub.com</p>
              </div>
              <img src={EmailImg} alt="" className="footer_mail_img" />
            </div>
            <p className="footer_left_text">
              Join our Mailing List to receive updates and information on the official launch of the
              app an d receive a code for $5 off.
            </p>
            <div className="footer_input_field">
              <input type="text" className="footer_input" placeholder="Email" />
              <button type="button" className="input_btn">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="Footer_col">
          <div className="footer_right_content">
            <p className="footer_quiz_t">Have a Question?</p>
            <div className="footer_right_form">
              <input type="text" className="footer_right_input" placeholder="Name" />
              <input type="text" className="footer_right_input" placeholder="Email" />
              <textarea
                className="footer_textarea"
                name=""
                id=""
                placeholder="Message.."
              ></textarea>
              <button type="button" className="footer_right_btn">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
