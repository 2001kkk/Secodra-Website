import React from "react";
import "../styles/About.css";
import aboutImage from "../assets/about-.jpg";
import missionImage from "../assets/mission.png";
import visionImage from "../assets/vision.png";

const About = () => {
  return (
    <>
            <section className="about">

        {/* ✅ Header */}
        <div className="about-header">
          <h1>About Secodra</h1>
          <p>Empowering Businesses Through Secure Digital Innovation</p>
        </div>

        {/* ✅ Who We Are */}
        <div className="about-section">
          <div className="text">
            <h2>Who We Are</h2>
            <p>
              <strong>Secodra</strong> is a visionary IT company committed to bridging the gap between cutting-edge technology and real-world business needs.
              Headquartered in India, we bring together a team of passionate developers, designers, and cybersecurity experts to deliver custom digital experiences.
            </p>
            <p>
              Whether you're a startup seeking digital identity or an enterprise aiming to scale, Secodra provides end-to-end solutions that are agile,
              secure, and user-focused.
            </p>
          </div>
          <div className="image hover-effect">
            <img src={aboutImage} alt="Secodra Team Collaboration" />
          </div>
        </div>

        {/* ✅ Our Mission */}
        <div className="about-section reverse">
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              To empower global businesses by delivering robust, intuitive, and secure digital products that enhance growth, productivity, and customer engagement.
              We are driven by innovation and thrive on turning complex challenges into simple, impactful solutions.
            </p>
          </div>
          <div className="image hover-effect">
            <img src={missionImage} alt="Secodra Mission Illustration" />
          </div>
        </div>

        {/* ✅ Our Vision */}
        <div className="about-section">
          <div className="text">
            <h2>Our Vision</h2>
            <p>
              Our vision is to be a global technology leader known for integrity, quality, and innovation.
              We aspire to shape a digital future where security and creativity go hand in hand, and where our solutions uplift lives and businesses alike.
            </p>
          </div>
          <div className="image hover-effect">
            <img src={visionImage} alt="Secodra Vision Infographic" />
          </div>
        </div>

        {/* ✅ Our Core Values */}
        <div className="about-section reverse">
          <div className="text">
            <h2>Our Core Values</h2>
            <ul>
              <li>💡 <strong>Innovation:</strong> We constantly push boundaries to bring future-ready solutions.</li>
              <li>🔒 <strong>Security:</strong> Security is at the core of every product and service we deliver.</li>
              <li>🤝 <strong>Collaboration:</strong> We partner with clients, valuing transparency and trust.</li>
              <li>🚀 <strong>Excellence:</strong> From UI to backend, we deliver nothing but the best.</li>
              <li>🕒 <strong>Timeliness:</strong> We believe in punctuality and precision with every project.</li>
            </ul>
          </div>
          <div className="image hover-effect">
            <img src={aboutImage} alt="Secodra Core Values" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
