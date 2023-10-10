import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.1091417d32e491f0bbb6.png";
import image2 from "../../assets/image2.82da8b2725df896d8a8e.png";
import image3 from "../../assets/image3.69484cb0ee7687a8c28b.png";
import image4 from "../../assets/image4.2c0d30b9ce1579eb1109.png";
import addides from "../../assets/download (1).png";
import nike from "../../assets/download (2).png";
import NB from "../../assets/download.png";
import True from "../../assets/download (12).png";

function Reasons() {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="....." />
        <img src={image2} alt="....." />
        <img src={image3} alt="....." />
        <img src={image4} alt="....." />
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span>CHOOSE US?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={True} alt="..." />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>

          <div>
            <img src={True} alt="..." />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>

          <div>
            <img src={True} alt="..." />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>

          <div>
            <img src={True} alt="..." />
            <span>RELIABLE PARTNERS</span>
          </div>
          <span className="info-reasons">OUR PARTNERS</span>
          <div className="partners">
            <img src={NB} alt="..." />
            <img src={addides} alt="..." />
            <img src={nike} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
