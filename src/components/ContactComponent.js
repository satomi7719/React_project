import React from "react";

const contact = () => (

  <div>
    <h1>Contact Us!</h1>
          <div className="row">
            <div className="col-lg-8 mb-4">
              <iframe style={{width: '100%', height: '400px', border: 0}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29742.24895232316!2d-157.85020787104082!3d21.28013004520087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006df4e5c129af%3A0x4633ddc52a688878!2sWaikiki%2C%20Honolulu%2C%20HI%2096815!5e0!3m2!1sen!2sus!4v1595216785325!5m2!1sen!2sus" />
            </div>
            <div className="col-lg-4 mb-4">
              <h3>Contact Details</h3>
              <p>
                1234 ABCDEF DR
                <br />HI, United States 96830
                <br />
              </p>
              <p>
                <abbr title="Phone">P</abbr>: (123) 456-7890
              </p>
              <p>
                <abbr title="Email">E</abbr>:
                <a href="mailto:name@example.com">name@example.com
                </a>
              </p>
              <p>
                <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-8 mb-4">
              <h3>Send us a Message</h3>
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Full Name:</label>
                    <input type="text" className="form-control" id="name" required data-validation-required-message="Please enter your name." />
                    <p className="help-block" />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Phone Number:</label>
                    <input type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Email Address:</label>
                    <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
                  </div>
                </div>
                <div className="control-group form-group">
                  <div className="controls">
                    <label>Message:</label>
                    <textarea rows={10} cols={100} className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength={999} style={{resize: 'none'}} defaultValue={""} />
                  </div>
                </div>
                <div id="success" />
                <button type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
              </form>
            </div>
          </div>
        </div>
     
    );
    export default contact;