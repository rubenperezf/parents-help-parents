import React, { useState } from "react";
import ToggleContent from "../ToggleContent";

function FAQ() {
  return (
    <div className="contactUs-aboutUs-container">
      <h1>FAQ</h1>
      <h2>General Information</h2>
      <ToggleContent
        toggle={show => (
          <button className="open-faq" onClick={show}>What is Parents Help Parents?</button>
        )}
        content={hide => (
          <p>
            Parents Help Parents is a platform that helps you and your family
            connect with other families that share similar values. We facilitate 
            new relationships that allow families to collaborate with childcare when needed.
            <div className="close-faq"><button  className="close-faq-2" onClick={hide}>Close</button></div>
          </p>
        )}
      />
            <ToggleContent
        toggle={show => (
          <button className="open-faq" onClick={show}>Why I should trust Parents Help Parents?</button>
        )}
        content={hide => (
          <p>
            Parents Help Parents provides a safe platform that requires both parties to approve 
            each others' profiles before receiving their contact information. Additionally, parents
            can read about other Parents Help Parents experiences on the home page.
            <div className="close-faq"><button  className="close-faq-2" onClick={hide}>Close</button></div>
          </p>
        )}
      />
      <h2>Account Management</h2>
      <ToggleContent
        toggle={show => <button className="open-faq" onClick={show}>How I post my family?</button>}
        content={hide => (
          <p>
            You only need to create an account on Parents Help Parents, go
            to your profile and complete the form.
            <div className="close-faq"><button  className="close-faq-2" onClick={hide}>Close</button></div>
          </p>
        )}
      />
      <br></br>
      <ToggleContent
        toggle={show => (
          <button className="open-faq" onClick={show}>How do I edit my personal information?</button>
        )}
        content={hide => (
          <p>
            Go to your profile and edit whatever you would like to change.

            <div className="close-faq"><button  className="close-faq-2" onClick={hide}>Close</button></div>
          </p>
        )}
      />
      <ToggleContent
        toggle={show => (
          <button className="open-faq" onClick={show}>How do I upload a photo?</button>
        )}
        content={hide => (
          <p>
            Go to your profile and edit your pictures.
            <div className="close-faq"><button  className="close-faq-2" onClick={hide}>Close</button></div>
          </p>
        )}
      />
    </div>
  );
}

export default FAQ;
