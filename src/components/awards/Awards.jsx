import React from 'react'
import  AwardsImg1 from '../../assets/svg/awards1.svg'
import  AwardsImg2 from '../../assets/svg/awards2.svg'
import  AwardsImg3 from '../../assets/svg/awards3.svg'
import  AwardsImg4 from '../../assets/svg/awards4.svg'

const Awards = () => {
  return (
    <section className="awards_section">
      <div className="container">
        <div className="awards_title">
          <h2>Awards & Recognitions</h2>
        </div>

        <div className="awards_wrapper">
          <div className="awards_card">
            <div className="awards_first_div">
              <img src={AwardsImg1} alt="" />
            </div>
            <div className="awards_first_div">
              <h3>2021</h3>
            </div>
            <div className="awards_first_div">
              <h3>Best NGO Award</h3>
            </div>
            <div className="awards_first_div">
              <h3>Berlin Germany</h3>
            </div>
          </div>
          <div className="awards_card">
            <div className="awards_first_div">
              <img src={AwardsImg2} alt="" />
            </div>
            <div className="awards_first_div">
              <h3>2018</h3>
            </div>
            <div className="awards_first_div">
              <h3>Global Award</h3>
            </div>
            <div className="awards_first_div">
              <h3>New York USA</h3>
            </div>
          </div>
          <div className="awards_card">
            <div className="awards_first_div">
              <img src={AwardsImg3} alt="" />
            </div>
            <div className="awards_first_div">
              <h3>2014</h3>
            </div>
            <div className="awards_first_div">
              <h3>Foresto Award</h3>
            </div>
            <div className="awards_first_div">
              <h3>New Delhi India</h3>
            </div>
          </div>
          <div className="awards_card">
            <div className="awards_first_div">
              <img src={AwardsImg4} alt="" />
            </div>
            <div className="awards_first_div">
              <h3>2010</h3>
            </div>
            <div className="awards_first_div">
              <h3>Earth Saver Award</h3>
            </div>
            <div className="awards_first_div">
              <h3>Vienna, Austria</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards