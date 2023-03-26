import React, { useState } from 'react'
import Man from '../assets/man'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';


const Home = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [headingColor, setHeadingColor] = useState('white');
  const handleChange = (event)=>{
    setHeadingColor(event.target.value)
  }
  return (
    <div style={{height:'100vh', background:'#1e1e1e', color:'white', padding:'2rem'}}
    >
    <div style={{display:'flex', fontFamily:'Ubuntu', justifyContent:'space-between', alignItems:'center',}} >
      <div style={{width:'550px'}}>

       <p style={{color:'#c59557', marginBottom:'20px'}}>&lt; div class='portfolio' &gt;</p>

        <h1 style={isTabletOrMobile?{fontSize:'80px'}:{fontSize:'90px', marginLeft:'30px', color:headingColor}}>Asad Parkar</h1>


       <h2 style={isTabletOrMobile?{marginLeft:'0',fontWeight:'500',opacity:'0.5',fontSize:'20px'}:{marginLeft:'30px',fontWeight:'500', opacity:0.5}}>Full Stack Web Developer</h2>

       <p style={{color:'#c59557', marginTop:'20px'}}>&lt; / div &gt;</p>

       <div style={{marginTop:'20px'}}>
          <Link to='/about'>
          <button className='home_btn' style={{backgroundColor:'#2D2D2D',color:'white',border:'none', padding:'15px',fontSize:'18px',cursor:'pointer',marginRight:'25px',fontFamily:'Ubuntu'}}>Explore</button>
          </Link>


          <Link to='/contact'>
          <button className='home_btn' style={{backgroundColor:'#2D2D2D',color:'white',border:'none', padding:'15px',fontSize:'18px',cursor:'pointer',fontFamily:'Ubuntu'}}>Contact</button>
          </Link>
       </div>

      </div>
      <div style={{}}>
        <Man />
      </div>
    </div>
    </div>
  )
}

export default Home