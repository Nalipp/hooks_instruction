import React, { useState } from 'react';
import './authenticationForm.css';

function AuthenticationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    const user = {
      username,
      email,
      password,
    }
    alert(`submitting... ${JSON.stringify(user)}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>username
        <input 
          onChange={e => setUsername(e.target.value)}
          value={username} />
      </label>
      <label>email
        <input 
          onChange={e => setEmail(e.target.value)}
          value={email} />
      </label>
      <label>password
        <input 
          onChange={e => setPassword(e.target.value)}
          type="password"
          value={password} />
      </label>
      <button>submit</button>
    </form>
  )
}

export default AuthenticationForm;
