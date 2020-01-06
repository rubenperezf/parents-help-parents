import React, { Component } from 'react';


class SendEmailComponent extends Component {

  state = {
    email: {
      recipient: 'rubenperezfeijoo@gmail.com',
      sender: '',
      subject: 'Hola',
      text: 'Gente'
    }
  }

  sendEmail = _ => {
    const { email } = this.state;
    fetch(`http://localhost:2500/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
      .catch(err => console.error(err))
  }
  render() {
    const { email } = this.state;
    const spacer = {
      margin: 10
    }
    const textArea = {
      borderRadius: 4
    }
    return (
      <div className="App">
        <div style={{ marginTop: 10 }} >
          <h2> Send Email </h2>

          <label> Sender </label>
          <br />
          <input value={email.sender}
            onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
          <div style={spacer} />

          
          <button onClick={this.sendEmail}> Send Email </button>
        </div>
      </div>
    );
  }
}

export default SendEmailComponent;