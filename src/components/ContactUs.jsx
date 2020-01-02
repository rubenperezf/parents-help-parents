import React,{useState} from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessate] = useState("");
  return (
    <div className="contactUs-aboutUs-container form-contact-us">
      <h1>Contact Us</h1>
      <form>
        <input type="text"  placeholder="Your Name" />
        <input type="email"  placeholder="Email Address" />
        <textarea placeholder="Type your Message" rows="20" cols="1000"></textarea>
        <button className="button"><span>Send</span></button>
      </form>
    </div>
  );
}

export default ContactUs;
