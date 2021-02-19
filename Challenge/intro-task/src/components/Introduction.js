import React from "react";
import { useState } from "react";
import useIntersect from "../components/useIntersect";
//import image from "./../img/pic2.png";

export default function Introduction() {
  const [stateObj, setStateObj] = useState({
    intro: false,
  });
  const introductionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setStateObj({ intro: true });
        observer.disconnect();
      }
    });
  };
  const [introRef] = useIntersect(introductionCallback, {
    root: null,
    threshold: 0.4,
  });
  return (
    <div className="introduction" ref={introRef}>
      {stateObj.intro && <span className="background-title">about</span>}
      {stateObj.intro && (
        <div className="intro-title">Hiii , I'am Sarita Jain </div>
      )}
      {stateObj.intro && (
        <React.Fragment>
          <div className="intro-text">
            <p>CHANNELIZE ENERGY. IMPROVE QUALITY OF LIFE</p>
            <div>
              <p>
                Sarita Mahindra Jain from Mumbai, India is a highly respected
                Feng Shui expert, consultant, practitioner and teacher with over
                18 years experience. Sarita's no-nonsense approach to Feng Shui,
                her professionalism, expertise and warm personality have earned
                her a large client base in the country.
              </p>
            </div>
          </div>
          <div className="pic2">
            {/* {<img src={image} alt="sarita jain" />} */}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
