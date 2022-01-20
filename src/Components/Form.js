import React, { useState } from 'react';

export default function Form() {
  const [inputs, setInputs] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted');
    console.log(inputs);
    // Code for submit form api call
    alert('Form submitted..')
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    // console.log(`${name}: ${value}`);
    setInputs(values =>({...values, [name]:value}))
    // console.log(inputs);
  }
  return <div>
      <form onSubmit={handleSubmit}>
          <label>
              Username: <input name='username' onChange={handleChange} type='text' value={inputs.username || ''} placeholder='Enter Usernme'></input>
          </label>
          <br/>
          <label>
            Email: <input name='email'  onChange={handleChange} type='email' value={inputs.email || ''}  placeholder='Enter Email'></input>
          </label>
          <br/>
          <label>
            First Name: <input name='firstName' onChange={handleChange} type='text' value={inputs.firstName || ''}  placeholder='Enter First Name'></input>
          </label>
          <br/>
          <label>
            Last Name: <input name='lastName' onChange={handleChange} type='text' value={inputs.lastName || ''}  placeholder='Enter Last Name'></input>
          </label>
          <input type='submit' value='SUBMIT'></input>
      </form>
  </div>;
}
