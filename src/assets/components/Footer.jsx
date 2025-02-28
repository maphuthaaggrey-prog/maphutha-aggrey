import { useState } from "react";
import gitHub from '../images/icons8-github 1.png'
import gMail from '../images/icons8-gmail (1) 1.png'
import linkedIn from '../images/Vector.png'
import whatsapp from '../images/Vector-1.png'

const Footer = () => {
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [sendMsg, setSendMsg] = useState(""); // State for success/error message
  const [errors, setErrors] = useState({}); // State for form validation errors

  const contactScriptURL =
    "https://script.google.com/macros/s/AKfycbww0-ZOxv9syxqIHJx5EhpAn-dShkQix4AtL7oaSyIBUc3TRddG5F2vMqNVJCxhslxKjw/exec"; // Replace with your deployed web app URL

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(e.target);
    const firstName = formData.get("first-name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Validation
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "Name is required!";
    if (!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/))
      newErrors.email = "Valid email is required!";
    if (!phone.match(/^[0-9]{10}$/))
      newErrors.phone = "A valid 10-digit phone number is required.";
    if (!message.trim()) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set validation errors
      return; // Stop submission if there are errors
    }

    setLoading(true); // Set loading state
    setErrors({}); // Clear previous errors

    try {
      const response = await fetch(contactScriptURL, {
        method: "POST",
        body: new URLSearchParams(formData), 
      });

      if (response.ok) {
        setSendMsg("Thank You For Contacting Us!"); 
        e.target.reset();
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      setSendMsg("Thank You For Contacting Us!"); 
      e.target.reset();
    } finally {
      setLoading(false); 
      setTimeout(() => setSendMsg(""), 5000);
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-cont" id="footer-cont">
          <form
            name="message-to-google-sheet"
            onSubmit={handleSubmit}
            action={contactScriptURL}
            method="POST"
          >
            <p className="send-message">I'd Love to Hear From You</p>
            <fieldset>
              <label htmlFor="first-name">
                Enter Your Name:
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  placeholder="Example: Aggrey"
                />
                {errors.firstName && (
                  <p className="error-message">{errors.firstName}</p>
                )}
              </label>

              {/* Email Field */}
              <label htmlFor="email">
                Enter Your Email:
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Example: maphuthaaggrey83@gmail.com"
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </label>

              {/* Phone Field */}
              <label htmlFor="phone">
                Enter Phone Number:
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Example: 0765216787"
                />
                {errors.phone && (
                  <p className="error-message">{errors.phone}</p>
                )}
              </label>

              {/* Message Field */}
              <label htmlFor="message">
                Message:
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="10"
                  placeholder="Your Enquiry"
                />
                {errors.message && (
                  <p className="error-message">{errors.message}</p>
                )}
              </label>
            </fieldset>

            {/* Submit Button */}
            <input
              type="submit"
              value={loading ? "Submitting..." : "Submit"}
              name="send-message"
              className="submit-btn"
              disabled={loading}
            />
          </form>

          {/* Success/Error Message */}
          {sendMsg && <p className="send-msg">{sendMsg}</p>}
          <div className="social-icons">
                       <a href="https://github.com/maphuthaaggrey-prog" target="_blank"><img src={gitHub} className='icon'/></a>
                       <a href="https://www.linkedin.com/in/maphutha-chikane/" target="_blank"><img src={linkedIn} className='icon'/></a>
                       <a href="mailto:maphuthaaggrey83@gmail.com"><img src={gMail} className='icon'/></a>
                       <a href="https://wa.link/hxnh0o" target="_blank"><img src={whatsapp} className='icon'/></a>
                    </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Maphutha Aggrey. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;