import React from 'react'
import YouCanImage from '../../assets/img/youCanImg.png'
const YouCanComponent = () => {
  return (
    <section className='youcansection'>
      <div className="container">
        <div
          className="youCanWrapper"
          style={{
            backgroundImage: `url(${YouCanImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="youCanDiv1">
            <h2>You can contribute to make the environment greener!</h2>
          </div>
          <div className="youCanDiv2">
            <button className='ycbtn1'>Join as a volunteer</button>
            <button className='ycbtn2'>Donate</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YouCanComponent