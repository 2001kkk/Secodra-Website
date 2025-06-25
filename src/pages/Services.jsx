import React from "react";
import "../styles/Services.css";
import webIcon from "../assets/web.png";
import mobileIcon from "../assets/app-development.jpg";
import vaptIcon from "../assets/vpat.jpg";
import uiuxIcon from "../assets/UI-UX.jpeg";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "We build responsive and high-performance websites using the latest technologies tailored to your business needs.",
      icon: webIcon,
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform Android & iOS applications with elegant UI, fast performance, and strong backend support.",
      icon: mobileIcon,
    },
    {
      title: "VAPT Security Services",
      description: "Comprehensive Vulnerability Assessment and Penetration Testing to ensure your apps are safe and secure.",
      icon: vaptIcon,
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user interfaces to enhance user experience and business value.",
      icon: uiuxIcon,
    }
  ];

  return (
    <section className="services-page">
      <h1>Our Services</h1>
      <p>At Secodra, we offer powerful digital solutions backed by expert development and robust security.</p>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
