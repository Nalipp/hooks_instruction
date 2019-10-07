import React, { useState } from 'react';
import './authenticationForm.css';

function AuthenticationForm() {
  const username = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');

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
        <input {...username} />
      </label>
      <label>email
        <input {...email} />
      </label>
      <label>password
        <input {...password} type="password"/>
      </label>
      <button>submit</button>
    </form>
  )
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

export default AuthenticationForm;
