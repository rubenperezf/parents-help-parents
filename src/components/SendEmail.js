import React from 'react';
import emailjs from 'emailjs-com';

export default function SendEmail() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_wBYutKwN', e.target, 'user_uw6TaSkPzhpNcnXFPQEdA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <form className="send-email-container" onSubmit={sendEmail}>
      <input type="email" name="user_email" placeholder="email"/>
      <button class="button_cont" type="submit" align="center" class="example_d" href="add-website-here" target="_blank" rel="nofollow noopener">Interested</button>
    </form>
  );
}