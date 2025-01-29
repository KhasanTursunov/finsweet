import React from 'react'
import TeamImg1 from '../../assets/img/team1.png'
import TeamImg2 from '../../assets/img/team2.png'
import TeamImg3 from '../../assets/img/team3.png'
import TeamImg4 from '../../assets/img/team4.png'
import TeamImg5 from '../../assets/img/team5.png'
import TeamImg6 from '../../assets/img/team6.png'
import TeamImg7 from '../../assets/img/team7.png'
import TeamImg8 from '../../assets/img/team8.png'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const OurTeamComponent = () => {
  return (
    <section className="ourTeamSection">
      <div className="container">
        <div className="ourTeam_title">
          <h2>Meet our team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="ourTeamcards">
            <div className="ourTeamcard">
              <img src={TeamImg1} alt="" />
              <h4>Leonard John Davies</h4>
              <p>Cofounder, CEO</p>
              <div className="icons">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
            <div className="ourTeamcard">
              <img src={TeamImg2} alt="" />
              <h4>Francis Weber</h4>
              <p>Vice Chairman</p>
              <div className="icons">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
            <div className="ourTeamcard">
              <img src={TeamImg3} alt="" />
              <h4>Kyla Obrien</h4>
              <p>Head of Authority</p>
              <div className="icons">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
            <div className="ourTeamcard">
              <img src={TeamImg4} alt="" />
              <h4>Adrian Dixon</h4>
              <p>Support Executive</p>
              <div className="icons">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
            <div className="ourTeamcard">
              <img src={TeamImg5} alt="" />
              <h4>Freddy Busby</h4>
              <p>Project Manager</p>
              <div className="icons">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
            <div className="ourTeamcard">
              <img src={TeamImg6} alt="" />
              <h4>Dale Banks</h4>
              <p>Accountatnt, Finance</p>
              <div className="icons">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
            <div className="ourTeamcard">
              <img src={TeamImg7} alt="" />
              <h4>Miriam Middleton</h4>
              <p>Cofounder, CEO</p>
              <div className="icons">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
            <div className="ourTeamcard">
              <img src={TeamImg8} alt="" />
              <h4>Ellen Walton</h4>
              <p>Vice Chairman</p>
              <div className="icons">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeamComponent