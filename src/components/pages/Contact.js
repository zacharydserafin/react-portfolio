import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/Contact.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState('');

  const [invalidEmail, setInvalidEmail] = useState('');
  const [invalidName, setInvalidName] = useState('');
  const [invalidMessage, setInvalidMessage] = useState('');


  const handleInputChange = (e) => {
    const inputType = e.target.name;
    const inputValue = e.target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
      setInvalidEmail('');
    } else if (inputType === 'name') {
      setName(inputValue);
      setInvalidName('');
    } else {
      setMessage(inputValue);
      setInvalidMessage('');
    }
  };

  const handleInputBlur = (e) => {
    const inputType = e.target.name;
    if (inputType === 'email' && (!validateEmail(email) || !email)) {
      setInvalidEmail('Valid email is required');
    }
    if (inputType === 'name' && !name) {
      setInvalidName('Name is required');
    }
    if (inputType === 'message' && !message) {
      setInvalidMessage('Message is required');
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !name || !message) {
      setAlert('Please fill all required fields with valid input');
      return;
    }

    setAlert('Success!');
    setTimeout(function() {
      setAlert('');
    }, 10000);

    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <div className="m-5 p-3 card">
      <div className="text-center">
        <h3 className="mb-4 contact-title">Contact Me!</h3>
      </div>
      <form className="row g-3">
        <div className="col-md-6">
          <input
            value={email}
            name="email"
            className="form-control contact-input"
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            type="email"
            placeholder="email"
          />
          {invalidEmail && (
            <div>
              <p className="form-text mb-0">{invalidEmail}</p>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <input
            value={name}
            name="name"
            className="form-control contact-input"
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            type="text"
            placeholder="name"
          />
          {invalidName && (
            <div>
              <p className="form-text mb-0">{invalidName}</p>
            </div>
          )}
        </div>
        <div className="col-12">
          <textarea
            value={message}
            name="message"
            className="form-control contact-input"
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            type="text"
            placeholder="message"
          />
          {invalidMessage && (
            <div>
              <p className="form-text mb-0">{invalidMessage}</p>
            </div>
          )}
        </div>
        <div className="col-12">
          <button type="button" className="btn clickable" id="contact-button" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
      {alert && (
        <div>
          <p className="form-text mb-0">{alert}</p>
        </div>
      )}
    </div>
  );
}