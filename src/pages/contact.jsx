import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();
   const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_sa8si5m', 'template_pi5508w', form.current, 'RT3UsnxHMQz6dFUBY')
        .then((result) => {
            console.log(result.text);
            console.log('message sent')
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    
    <div style={{height:'100vh', background:'#1E1E1E', fontFamily:'Consolas', color:'white', padding:'20px'}}>
    <h2>&lt; Contact &gt;</h2>
    <div>
      <form ref={form} style={{display:'flex', flexDirection:'column'}} onSubmit={sendEmail}>
        <input placeholder='Name' name='name' value={name} onChange={(e)=>{
          setName(e.target.value)
        }}></input>
        <input placeholder='Email' name='email' value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}></input>
        <textarea name='message' value={message} onChange={(e)=>{
          setMessage(e.target.value)
        }}></textarea>
        <button type='submit' style={{marginTop:'25px'}}>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contact