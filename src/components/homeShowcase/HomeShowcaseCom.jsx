import React, { useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import Line from "../../assets/img/Line.png";
import Instead2 from "../../assets/svg/instead2.svg";

const HomeShowcaseCom = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoVisible(true);
  };

  return (
    <>
      {!isVideoVisible ? (
        <section
          style={{
            backgroundImage: `url(${Instead2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "628px",
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="homeShowcase"
        >
          <div className="container">
            <div className="wrapper_of_showcase_home">
              <div className="up">
                <div className="inside1">
                  <h1>Save the environment today for a better tomorrow</h1>
                </div>
                <div className="inside2">
                  <button className="btn1">What We Do</button>

                  <button className="btn2" onClick={handleVideoPlay}>
                    <FaRegPlayCircle size={20} /> Play Video
                  </button>
                </div>
              </div>
              <div className="down">
                <p>23,800 trees planted</p>
                <img src={Line} alt="" />
                <p>5840 donations collected</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/linlz7-Pnvw?autoplay=1&loop=1&playlist=linlz7-Pnvw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0 }}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default HomeShowcaseCom;
