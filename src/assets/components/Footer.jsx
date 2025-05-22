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
                        <div className="available-for-work">
                      <p><span></span>Avaibale for Work</p>
                    </div>
            <p className="send-message">Let's Connect!</p>
            <p className="about-text">I’m currently open to junior-level opportunities in Front-End Development and UI/UX Design. If you’re looking for someone passionate about building clean, user-friendly web experiences — let’s connect!</p>
              <section>
                    <a href="https://github.com/maphuthaaggrey-prog" target="_blank" className="card005">
                        <div className="icon">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon"><path fill="currentColor" d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg>
                        </div>
                        <div className="details">
                            <p>Github</p>
                            <p>https://github.com/maphuthaaggrey-prog</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/maphutha-chikane/" className="card005" target="_blank">
                        <div className="icon">
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
                        </div>
                        <div className="details">
                            <p>LinkedIn Account</p>
                            <p>https://www.linkedin.com/in/maphutha-chikane/</p>
                        </div>
                    </a>
                    <a href="mailto:maphuthaaggrey83@gmail.com" className="card005">
                        <div className="icon">
                          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailRoundedIcon"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path></svg>
                        </div>
                          <div className="details">
                            <p>Email Address</p>
                            <p>maphuthaaggrey83@gmail.com</p>
                          </div>
                    </a>
                    <a href="tel:+27 76 521 6987" className="card005">
                          <div className="icon">
                              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WhatsAppIcon"><path fill="currentColor" d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path></svg>
                          </div>
                          <div className="details">
                                  <p>Phone/ Whatsapp</p>
                                  <p>+27 76 521 6787</p>
                          </div>
                    </a>
                    <a href="https://www.google.com/maps/place/Maphutha+Street,+Ga-Masemola/@-24.5498581,29.6402589,77m/data=!3m1!1e3!4m6!3m5!1s0x1ec11030466df9b7:0x856e93c42983cef!8m2!3d-24.5497167!4d29.6404416!16s%2Fg%2F11svx0v5wk?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" target="_blank" className="card005">
                          <div className="icon">
                              <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocationOnIcon"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                          </div>
                          <div className="details">
                                <p>Physical Address</p>
                                <p>Limpopo Ga-Masemola, South Africa</p>
                          </div>
                    </a>
          </section>

          </form>
        </div>
        <div className="footer-bottom">
          <p>Designed and Developed by Maphutha Aggrey</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;