import React from "react";
import "../styles/Services.css";
import webDevImage from "../assets/web.png";
import mobileDevImage from "../assets/app-development.jpg";
import vaptImage from "../assets/vpat.jpg";
import uiuxImage from "../assets/UI-UX.jpeg";
import marketingImage from "../assets/Digital-marketing.png"; 
import itConsultingImage from "../assets/IT-Consulting.png";

const Services = () => {
  const servicesList = [
    {
      title: "Web Development",
      description:
        "We craft responsive, scalable, and SEO-friendly websites using modern technologies tailored to your business needs.",
      image: webDevImage,
      link: "#web",
    },
    {
      title: "Mobile App Development",
      description:
        "We build high-performance mobile apps for Android and iOS platforms with seamless user experience.",
      image: mobileDevImage,
      link: "#mobile",
    },
    {
      title: "VAPT Services",
      description:
        "Our Vulnerability Assessment & Penetration Testing services ensure your digital assets are secure from cyber threats.",
      image: vaptImage,
      link: "#vapt",
    },
    {
      title: "UI/UX Design",
      description:
        "We create visually appealing and user-friendly interfaces for better engagement and brand identity.",
      image: uiuxImage,
      link: "#uiux",
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your online presence with our SEO, social media marketing, and performance-driven digital campaigns.",
      image: marketingImage,
      link: "#marketing",
    },
    {
      title: "IT Consulting",
      description:
        "Our experts guide businesses to adopt the right technology, optimize processes, and improve IT infrastructure.",
      image: itConsultingImage,
    },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          We offer a wide range of IT services to help your business grow and stay ahead in the digital era.
        </p>
      </div>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
