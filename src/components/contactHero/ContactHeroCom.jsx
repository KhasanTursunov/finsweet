import React, {memo} from "react";

const ContactHeroCom = () => {
  return (
    <section className="contact_hero_section">
      <div className="container">
        <div class="contact_about_wrapper2">
          <form className="contact_about_wrapper">
            <div class="inputs">
              <label for="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="John"
                required
              />
            </div>
            <div class="inputs">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
              />
            </div>
            <div class="inputs">
              <label for="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@email.com"
                required
              />
            </div>
            <div class="inputs">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter your subject"
                required
              />
            </div>
              <div class="inputs">
                <label for="message">message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  cols="30"
                  resize="none"
                  width="300px"
                  placeholder="Type your message here..."
                  required
                ></textarea>

              <div className="btn">
                <button className="contact_btn" type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default memo(ContactHeroCom);
