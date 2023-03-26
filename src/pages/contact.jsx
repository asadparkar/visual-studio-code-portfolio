import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();
  const [isSubmitted,setSubmitted] = useState(false);
   const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_sa8si5m', 'template_pi5508w', form.current, 'RT3UsnxHMQz6dFUBY')
        .then((result) => {
          setSubmitted(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    
    <div style={{height:'100vh', background:'#1E1E1E', fontFamily:'Consolas', color:'white', padding:'20px'}}>
    <h2>&lt; Contact &gt;</h2>
    {!isSubmitted && <div>
      <form ref={form} style={{display:'flex', flexDirection:'column'}} onSubmit={sendEmail}>
        <input style={{background:'#333333', border:'none', boxShadow:'5px 5px 15px #000', color:'white', width:'50%', height:'3rem', borderRadius:'15px',padding:'20px',marginTop:'10px',fontSize:'15px'}} placeholder='Name' name='name' value={name} onChange={(e)=>{
          setName(e.target.value)
        }}></input>
        <input style={{background:'#333333', border:'none', boxShadow:'5px 5px 15px #000', color:'white', width:'60%', height:'3rem', borderRadius:'15px',padding:'20px',marginTop:'30px',fontSize:'15px'}} placeholder='Email' name='email' value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}></input>
        <textarea placeholder='Your Message' style={{background:'#333333', border:'none', boxShadow:'5px 5px 15px #000', color:'white', width:'80%', height:'40%', borderRadius:'15px',padding:'20px',marginTop:'30px',fontSize:'15px',}} name='message' value={message} onChange={(e)=>{
          setMessage(e.target.value)
        }}></textarea>
        <button type='submit' style={{marginTop:'25px',width:'30%', border:'none',padding:'10px', fontSize:'15px', background:'#57C5B6',borderRadius:'15px',cursor:'pointer'}}>Submit</button>
      </form>
    </div>}
    {isSubmitted && <div style={{width:'90%',height:'200px',background:'#333333',color:'white',textAlign:'center',padding:'15px'}}>
        <h3>Form Submitted</h3>
        <h4 style={{marginTop:'20px'}}>I will soon reply to you! Thankyou for reaching out to me! 😊</h4>
    </div>}
    <h2 style={{marginTop:'10px'}}>&lt; / Contact &gt;</h2>

    </div>
  )
}

export default Contact