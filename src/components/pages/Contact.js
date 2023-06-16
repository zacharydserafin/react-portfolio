import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

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
      setAlert('please fill all required fields with valid input');
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
    <div>
      <form>
        <input
          value={email}
          name="email"
          className="form-control"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="email"
          placeholder="email"
        />
        {invalidEmail && (
          <div>
            <p className="form-text">{invalidEmail}</p>
          </div>
        )}
        <input
          value={name}
          name="name"
          className="form-control"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
          placeholder="name"
        />
        {invalidName && (
          <div>
            <p className="form-text">{invalidName}</p>
          </div>
        )}
        <input
          value={message}
          name="message"
          className="form-control"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
          placeholder="message"
        />
        {invalidMessage && (
          <div>
            <p className="form-text">{invalidMessage}</p>
          </div>
        )}
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {alert && (
        <div>
          <p>{alert}</p>
        </div>
      )}
    </div>
  );
}