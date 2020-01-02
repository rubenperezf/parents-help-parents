import React from "react";

function ContactUs() {
  return (
    <div className="contactUs-aboutUs-container form-contact-us">
      <h1>Contact Us</h1>
      <form>
        <input type="text" name="field1" placeholder="Your Name" />
        <input type="email" name="field2" placeholder="Email Address" />
        <textarea name="field3" placeholder="Type your Message" rows="20" cols="1000"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default ContactUs;
