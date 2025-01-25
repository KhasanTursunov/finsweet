import React from 'react'
import homeBg from '../../assets/img/home_bg.png'
import { FaRegPlayCircle } from "react-icons/fa";
import Line from '../../assets/img/Line.png'


const HomeShowcaseCom = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${homeBg})`,
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
                <div className="btn1">What We Do</div>
                <div className="btn2">
                  <FaRegPlayCircle size={20} /> Play Video
                </div>
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
    </>
  );
}

export default HomeShowcaseCom