import React from "react";
import WeAreImg1 from "../../assets/img/weAre1.png";
import WeAreImg2 from "../../assets/img/weAre2.png";
import WeAreImg3 from "../../assets/img/weAre3.png";

const WeAre = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="weAretitle">
            <h4>----- Projects we have done</h4>
            <h2>
              We are Creating a sustainable society, for everyone and forever.
            </h2>
          </div>

          <div className="weAreWrapper">
            <div
              className="weAreCard"
              style={{
                backgroundImage: `url(${WeAreImg3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="weAreOverlay"></div>

              <div className="weAreContent">
                <h3>Mission 40K: Tree Plantation</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button>See More</button>
              </div>
            </div>
            <div
              className="weAreCard"
              style={{
                backgroundImage: `url(${WeAreImg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="weAreOverlay"></div>

              <div className="weAreContent">
                <h3>Weekly cleanliness program in city</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button>See More</button>
              </div>
            </div>
            <div
              className="weAreCard"
              style={{
                backgroundImage: `url(${WeAreImg1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="weAreOverlay"></div>

              <div className="weAreContent">
                <h3>Wildlife safety program 2021</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <button>See More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WeAre;
