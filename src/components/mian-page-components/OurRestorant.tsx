import React from "react";

import restorantimg1 from "../../assets/mainpage/Ourrestorant1.png";
import restorantimg2 from "../../assets/mainpage/Ourrestorant2.png";
import restorantimg3 from "../../assets/mainpage/Ourrestorant3.png";
import arrow from "../../assets/mainpage/arrow.svg";
import restorantIcon1 from "../../assets/mainpage/OurrestorantIcon1.png";
import restorantIcon2 from "../../assets/mainpage/OurrestorantIcon-2.png";

const OurRestorant = () => {
  return (
    <div>
      <div>
        <h1>OUR RESTAURANT</h1>
        <div>
          <div>
            <div>
              <img src={restorantimg1} alt="resimg 1" />
              <img src={restorantimg2} alt="restorant 2" />
            </div>
            <img src={restorantimg3} alt=" restorant 3" />
          </div>
          <div>
            <h2>For every specialoccasion there’s heritaste</h2>
            <p>
              Indignation and dislike men who are so beguiled demoralized by the charms of pleasure
              of the moment. Success Story.
            </p>
            <div>
              <img src={restorantIcon1} alt="icon" />
              <div>
                <h2>Success Story</h2>
                <p>
                  Certain circumstances and owing to the claims of duty obligations of business it
                  will frequently.
                </p>
              </div>
            </div>
            <button>
              Read More <img src={arrow} alt="arrow" />
            </button>
            <div>
              <img src={restorantIcon2} alt="icon" />
              <div>
                <h2>Passionate Chefs</h2>
                <p>
                  Duty or the obligations of business it frequently occur pleasures have to be
                  repudiated.
                </p>
              </div>
            </div>
            <button>
              Read More <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRestorant;
