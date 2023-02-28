/* eslint-disable react/function-component-definition */
/* eslint-disable prettier/prettier */
import React from 'react';
import VideoImg from '../assets/VideoImg.svg';

const Action = () => {
  return (
    <div className="Action">
      <div className="Action_center">
        <p className="Action_title">HPH in Action</p>
        <div>
          <img src={VideoImg} alt="" className="Action_img" />
        </div>
      </div>
    </div>
  );
};

export default Action;
