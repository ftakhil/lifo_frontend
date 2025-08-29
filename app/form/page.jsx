'use client';
import React, { useState , useEffect} from 'react';
import axios from 'axios';



export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // Handle input change
  const handleName = (e) => {
    console.log(e.target.value);
    const name = e.target;
    setName(name.value);
  };
  const handleEmail = (e) => {
    console.log(e.target.value);
    const email = e.target;
    setEmail(email.value);
  };


 // Handle form submission
const handleSubmit = async(e) => {
  e.preventDefault();
  
  // Here you can send the data to your backend or perform any action

  let data = {name,email};

  const submit = await axios.post('https://lifo-backend-qyddbhwor-ftakhils-projects.vercel.app/sign', data)
  console.log(submit);
  // You can also send this data to your backend using axios or fetch
  console.log(name,email);
  // Clear form fields after submission
};

  useEffect(() => {
    const axios = require('axios'  );

  
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://lifo-backend-qyddbhwor-ftakhils-projects.vercel.app/login',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});

  },[])




  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '20px auto' }}>
      <h2>Contact Form</h2>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          required
        />
      </label>

      <br /><br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          required
        />
      </label>

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}