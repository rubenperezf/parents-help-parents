import React, { useState, useEffect } from "react";
import newsletterBackground from "../../images/newsletter/newsletter-background.jpg";
import axios from "axios";

function Newsletter() {
  const [emailRecipient, setEmailRecipient] = useState("");
  const [emailSender, setEmailSender] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailText, setEmailText] = useState("");

  const sendEmail = _ => {
    fetch(
      `http://localhost:2500/send-email?recipient=${emailRecipient}&sender=${emailSender}&topic=${emailSubject}&text=${emailText}`
    ) 
      .catch(err => console.error(err));
    handlePost(emailRecipient);
  };
  useEffect(() => {
    setEmailSender("rubenperezfeijoo@gmail.com");
    setEmailSubject(" Welcome to Parents Help Parents Newsletter");
    setEmailText(
      "Thank you for join our Newsletter.  We will send you monthly emails about our new things."
    );
  }, []);
  const handlePost = email => {
    axios.post("http://localhost:2500/newsletter", {
      email: email
    });
  };
  return (
    <div
      className="newsletter-container"
      style={{ backgroundImage: `url(${newsletterBackground})` }}
    >
      <div className="title-newsletter">
        <h1>Join our Newsletter!</h1>
      </div>
      <form>
        <div className="form-newsletter-container">
          <div className="input-newsletter">
            <input
              onChange={e => setEmailRecipient(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="button-newsletter">
            <button onClick={sendEmail}>
              Subscribe
              <span />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
