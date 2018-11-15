import React from "react";
import CarWash from "../../img/CarWash1.jpg";

// Styling
import "./home.css";

export default function home() {
  return (
    <div className="landing">
      <div className="landing-header">
        <div className="landing-header-overlay">
          <div className="bi-container">
            <h3 className="mission-statement-header">Our Mission:</h3>
            <p className="mission-statement">
              To deliver the best car wash possible for our customers and to be
              the market leader in quality, price, and performance.
            </p>
          </div>
        </div>
      </div>
      <div className="bi-container landing-section1">
        <div className="landing-detail">
          <h3 className="detail-heading">Car Wash Services</h3>
          <p className="detail-content">
            The future of car washing! Our services include a complete wash in
            only 3 minutes and free vacuums which can be used at your leisure,
            for as long as you like!
          </p>
        </div>
        <div className="landing-detail">
          <h3 className="detail-heading">Fleet Programs</h3>
          <p className="detail-content">
            If your company has a fleet of vehicles, or just a fleet of
            employees, we can help you here at Blue Iguana Car Wash®! Our fleet
            program will make keeping your fleet easier than it has ever been.
          </p>
        </div>
        <div className="landing-detail">
          <h3 className="detail-heading">Fundraising</h3>
          <p className="detail-content">
            Interested in doing a Charity Wash? Our fundraising program is
            designed to help your organization raise money quickly and easily
            while providing the community a service they need.
          </p>
        </div>
      </div>
      <div className="bi-container landing-email-list">
        <h3 className="email-list-header">Join our email list</h3>
        <p className="email-list-content">
          Get the latest news updates and special offers from Blue Iguana.
        </p>
        <div className="email-list-form">
          <input
            type="text"
            placeholder="Your email address"
            className="email-list-input"
          />
          <button className="email-list-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
