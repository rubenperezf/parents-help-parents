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
            Read other parents expreiences about this plataform here.
            <div className="close-faq"><button  className="close-faq-2" onClick={hide}>Close</button></div>
          </p>
        )}
      />
      <h2>Account Management</h2>
      <ToggleContent
        toggle={show => <button className="open-faq" onClick={show}>How I post my family?</button>}
        content={hide => (
          <p>
            You only need to create and account in Parents Help Parents and go
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
            Go to your profile and edit what ever you like to change.

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
