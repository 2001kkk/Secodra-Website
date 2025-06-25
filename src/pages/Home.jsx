import React from "react";
import "../styles/Home.css";
import companyImage from "../assets/company.jpg";
import servicesImage from "../assets/service.jpg";

const Home = () => {
  return (
    <>
      <section className="home">
        {/* ✅ Hero Section */}
        <div className="hero">
          <h1>Welcome to Secodra</h1>
          <p>Your trusted partner in Web & Mobile App Development and VAPT services.</p>
        </div>

        {/* ✅ About Company */}
        <div className="about-company">
          <div className="about-text">
            <h2>About Secodra</h2>
            <p>
              <strong>Secodra</strong> is a professional IT company based in India, offering innovative digital solutions.
              We build high-quality websites and mobile applications tailored to business needs, while also ensuring
              cybersecurity through our expert Vulnerability Assessment and Penetration Testing (VAPT) services.
            </p>
            <p>
              Our mission is to empower businesses with secure, scalable, and user-friendly digital products.
              Whether you're a startup or an enterprise, Secodra delivers results that matter.
            </p>
          </div>
          <div className="about-image">
            <img src={companyImage} alt="Team Working at Secodra" />
          </div>
        </div>

        {/* ✅ Services Section */}
        <div className="services-summary">
          <h2>Our Core Services</h2>
          <ul>
            <li><strong>Web Development:</strong> Responsive websites using modern stacks.</li>
            <li><strong>Mobile App Development:</strong> Android & iOS apps with smooth performance.</li>
            <li><strong>VAPT Services:</strong> Security testing to identify and fix vulnerabilities.</li>
            <li><strong>UI/UX Design:</strong> Clean, user-friendly interfaces for better engagement.</li>
          </ul>
          <img src={servicesImage} alt="Secodra Services Overview" />
        </div>

        {/* ✅ Why Choose Us Section */}
        <div className="why-choose">
          <h2>Why Choose Secodra?</h2>
          <div className="why-list">
            <div className="why-item">
              <h3>Experienced Team</h3>
              <p>Our developers and security experts bring years of real-world experience to every project.</p>
            </div>
            <div className="why-item">
              <h3>Client-Centric Approach</h3>
              <p>We understand your needs and build solutions that solve real problems, on time and on budget.</p>
            </div>
            <div className="why-item">
              <h3>Security First</h3>
              <p>With in-house VAPT services, your applications are built to be both functional and secure.</p>
            </div>
            <div className="why-item">
              <h3>Ongoing Support</h3>
              <p>We offer long-term support and maintenance for all projects we deliver.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
