import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const OurEvents = () => {
  return (
    <>
      <section className='OurEventsSection'>
        <div className="container">
          <div className="eventsTitle">
            <h2>Our Events</h2>
          </div>
          <div className="eventsWrapper">
            <div className="eventsCard">
              <div className="firstInside">
                <h3>23</h3>
                <p>Sep</p>
              </div>
              <div className="secondInside">
                <h3>Next Events</h3>
                <h2>Say no to plastic usage and save the planet</h2>
              </div>
              <div className="ThirdInside">
                <button>
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="eventsCard">
              <div className="firstInside">
                <h3>25</h3>
                <p>Sep</p>
              </div>
              <div className="secondInside">
                <h3>Next Events</h3>
                <h2>Weekly cleaning program</h2>
              </div>
              <div className="ThirdInside">
                <button>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurEvents