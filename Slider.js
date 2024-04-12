import React from "react";
import { useEffect } from "react";
import microsoft from "./assets/microsoft.png";
import ibm from "./assets/ibm.png";
import unity from "./assets/unity.png";
import thread from "./assets/threads.png";
import huawei from "./assets/huawei.png";
import chatgpt from "./assets/chat-gpt.png"
import adobe from "./assets/adobe.png"
import amazon from "./assets/amazon-pay.png"
import amd from "./assets/amd.png"
import ea from "./assets/electronics-arts.png"
import intel from "./assets/intel.png"
import oracle from "./assets/oracle.png"
import siemens from "./assets/siemens.png"
import zoom from "./assets/zoom.png"

const Slider = () => {
    const aniSlider = () => {
      var logosSlideElement = document.querySelector(".logos");
  
      if (logosSlideElement) {
        var copy = logosSlideElement.querySelector(".logos-slide").cloneNode(true);
        logosSlideElement.appendChild(copy);
      } else {
        console.error("Element with class 'logos' or 'logos-slide' not found.");
      }
    }
  
    useEffect(() => {
      aniSlider();
    }, []); // Empty dependency array ensures that the effect runs once after the initial render
  
    return (
      <div>
        <h3  className="gradient-text c-title"
          style={{ fontStyle: "italic", fontWeight: "bold" }}>OUR RECRUITERS</h3>
        <div className="slider">
          <div className="logos">
            <div className="logos-slide">
              <img src={unity} alt="s-logo"/>
              <img src={huawei} alt="s-logo"/>
              <img src={microsoft} alt="s-logo"/>
              <img src={thread} alt="s-logo"/>
              <img src={zoom} alt="s-logo"/>
              <img src={ibm} alt="s-logo"/>
              <img src={adobe} alt="s-logo"/>
              <img src={amazon} alt="s-logo"/>
              <img src={amd} alt="s-logo"/>
              <img src={siemens} alt="s-logo"/>
              <img src={chatgpt} alt="s-logo"/>
              <img src={ea} alt="s-logo"/>
              <img src={intel} alt="s-logo"/>
              <img src={oracle} alt="s-logo"/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Slider