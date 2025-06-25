// import React from "react";
// import "../styles/Contact.css";

// const Contact = () => {
//   return (
//     <section className="contact-section">
//       <div className="contact-heading">
//         <h1>Let’s Connect</h1>
//         <p>We’re here to help. Fill out the form and we’ll get back to you shortly.</p>
//       </div>

//       <div className="contact-form-wrapper">
//         <form className="contact-form">
//           <div className="form-group">
//             <label>Your Name</label>
//             <input type="text" placeholder="Enter your name" required />
//           </div>

//           <div className="form-group">
//             <label>Email Address</label>
//             <input type="email" placeholder="Enter your email" required />
//           </div>

//           <div className="form-group">
//             <label>Message</label>
//             <textarea placeholder="Write your message here..." rows="6" required></textarea>
//           </div>

//           <button type="submit" className="submit-btn">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/api/contact", formData); // ✅ Connect to backend
      setStatus("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" }); // clear form
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message ❌");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-heading">
        <h1>Let’s Connect</h1>
        <p>We’re here to help. Fill out the form and we’ll get back to you shortly.</p>
      </div>

      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
