import React from "react";
import { motion } from "framer-motion";
import "../styles/Portfolio.css";

const projects = [
  {
    title: "Vidarbha Bioenergy Solutions Private Limited Website",
    description: "Website For The Online Buisness",
    image: require("../assets/project1.jpg"),
    link: "https://vidarbhabioenergysolutions.com/",
    github: "https://github.com/yourusername/ecommerce-app",
  },
  {
    title: "Online Car Rental Service Website",
    description: "Web Application For the Online Car Rental Service",
    image: require("../assets/car-rental.jpeg"),
    github: "https://github.com/2001kkk/Car-Rental-Management-System",
  },
  {
    title: "Emotion Based Muscic System",
    description: "Application To detect the Emotion and play music",
    image: require("../assets/emotion.png"),
    // link: "https://your-security-dashboard.com",
    github: "https://github.com/2001kkk/Emotion-Based-Music-System",
  },
  {
    title: "Insure Peoples",
    description: "Application to Buy Insurence Online",
    image: require("../assets/Insure Peoples.PNG"),
    link: "https://insurepeoples.com/",
    // github: "https://github.com/2001kkk/Emotion-Based-Music-System",
  },
];

const cardVariants = {
  hidden: { opacity: 0, rotateY: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const Portfolio = () => {
  return (
    <section className="portfolio-page">
      <motion.div
        className="portfolio-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Portfolio</h1>
        <p>Real projects. Real results. Explore what we’ve built.</p>
      </motion.div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-card glass-effect"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="button-group">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-button"
              >
                🚀 Live Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                💻 View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
