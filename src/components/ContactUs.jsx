import React,{useState} from "react";
import axios from "axios"

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = (
    name,
    email,
    message
  ) => {
    axios.post("http://localhost:2500/contactus", {
      name: name,
      email: email,
      message: message
    })
  }
  return (
    <div className="contactUs-aboutUs-container form-contact-us">
      <h1>Contact Us</h1>
      <form onSubmit= {e => {
        e.preventDefault();
        handlePost( name, email, message);
      }}>
        <input type="text"  placeholder="Your Name" onChange={ e => setName(e.target.value)} />
        <input type="email"  placeholder="Email Address" onChange={ e => setEmail(e.target.value)}/>
        <textarea placeholder="Type your Message" rows="20" cols="1000" onChange={ e => setMessage(e.target.value)}></textarea>
        <button className="button"><span>Send</span></button>
      </form>
    </div>
  );
}

export default ContactUs;
