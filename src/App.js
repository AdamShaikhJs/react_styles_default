import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const LabelClass = {
    color: 'red',
    marginBottom: '20px',
  };

  const handelSubmit = () => {
    console.log('hii', name, email);
  };
  return (
    <div>
      <h1>Controlled Component!</h1>
      <p>Start editing to see some magic happen :)</p>
      <from style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={LabelClass}>
          <label htmlFor="name">name </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="emailClass">
          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <button type="submit" onClick={handelSubmit}>
            submit{' '}
          </button>
        </div>
      </from>
    </div>
  );
}
