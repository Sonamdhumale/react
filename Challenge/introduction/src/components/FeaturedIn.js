import React, { useState, useRef, useEffect } from "react";

import Image1 from "../img/featuredin/MumbaiMirror.jpg";
import Image2 from "../img/featuredin/RadioCity.jpg";
import Image3 from "../img/featuredin/TimesProperty.jpg";
import Image4 from "../img/featuredin/time of india.jpg";

function FeaturedIn() {
  const [stateObj, setStateObj] = useState({
    feature1: false,
    feature2: false,
    feature3: false,
  });
  const someRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(featuredInCallback, {
      root: null,
      threshold: [0.25, 0.6, 0.9],
    });
    observer.observe(someRef.current);
  }, []);

  const featuredInCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.25) {
        setStateObj({
          feature1: true,
          feature2: false,
          feature3: false,
        });
      }
      if (entry.intersectionRatio > 0.6) {
        setStateObj({
          feature1: true,
          feature2: true,
          feature3: false,
        });
      }
      if (entry.intersectionRatio > 0.9) {
        setStateObj({
          feature1: true,
          feature2: true,
          feature3: true,
        });
        observer.disconnect();
      }
    });
  };

  return (
    <div className="container" ref={someRef}>
      {stateObj.feature1 && (
        <React.Fragment>
          <img id="image1" src={Image1} alt="MumbaiMirror"></img>
          <img id="image2" src={Image2} alt="RadioCity"></img>
        </React.Fragment>
      )}
      {stateObj.feature2 && (
        <React.Fragment>
          <img id="image3" src={Image3} alt="TimesProperty"></img>
          <div className="image5"></div>
        </React.Fragment>
      )}
      {stateObj.feature3 && (
        <React.Fragment>
          <img id="image4" src={Image4} alt="time of india"></img>
          <div className="image6"></div>
        </React.Fragment>
      )}
    </div>
  );
}

export default FeaturedIn;
