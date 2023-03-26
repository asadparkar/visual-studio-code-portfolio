import React from 'react'
import profile_pic from '../assets/profile_pic.webp'
import { useMediaQuery } from 'react-responsive';


const About = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <div style={{background:'#1e1e1e', color:'white', padding:'2rem', fontFamily:'Consolas'}}>
    <div style={isTabletOrMobile?{display:'flex',flexDirection:'column-reverse'}:{display:'flex', alignItems:'center'}}>
      <div>
        <h1 style={{fontSize:isTabletOrMobile?'17px':'25px', width:'90%'}}>I am a passionate computer science student currently persuing <span style={{color:'#3BA770'}}>software engineering.</span> Currently working as a <span style={{color:'#C59557'}}>web developer</span> with over 2+ years of experience.</h1>
      </div>

      <div>
      <img fetchpriority='high' style={{width:'200px'}} src={profile_pic} alt='Asad Parkar' />
      </div>
    </div>

        <h2 style={{paddingTop:isTabletOrMobile?'30px':'10px', color:'#BCA66D'}}>&lt;Education&gt;</h2>
          <p style={{marginTop:'15px', fontSize:isTabletOrMobile?'15px':'20px'}}>• High School -> Indian School Muscat(2007 - 2021)</p>
          <p style={{marginTop:'15px', fontSize:isTabletOrMobile?'15px':'20px'}}>• Bachelor of Technology -> D.Y Patil University(2021 - 2025)</p>

        <h2 style={{paddingTop:'15px', color:'#BCA66D'}}>&lt;/Education&gt;</h2>

        <h2 style={{paddingTop:'50px', color:'#2658CA', fontSize:'22px'}}>&lt;Academics&gt;</h2>
          <p style={{marginTop:'15px', fontSize:isTabletOrMobile?'15px':'20px'}}>• Secondary School -> 91.8% (CBSE)</p>
          <p style={{marginTop:'15px', fontSize:isTabletOrMobile?'15px':'20px'}}>• High School -> 92% (CBSE)</p>
          <p style={{marginTop:'15px', fontSize:isTabletOrMobile?'15px':'20px'}}>• B.tech Computer Engineering -> 9.3/10 Average CGPA (Mumbai University)</p>

        <h2 style={{paddingTop:'15px', color:'#2658CA',fontSize:'22px', marginBottom:'100px'}}>&lt;/Academics&gt;</h2>

    </div>
  )
}

export default About