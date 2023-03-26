import Atropos from 'atropos/react';
import "atropos/atropos.css";
import { useMediaQuery } from 'react-responsive';
import { Link, Navigate, useNavigate } from "react-router-dom";

// IMPORTING IMAGES
import postbits from '../assets/postbits.webp'
import DevConnect from '../assets/DevConnect.webp'
import youtube from '../assets/youtube.webp'
import portfolio from '../assets/portfolio.webp'
import weather from '../assets/weather.webp'

const Projects = () => {
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
const navigate = useNavigate();

  return (
    <div style={{ background:'#1e1e1e', color:'white', padding:'2rem', fontFamily:'Consolas'}}>
      <h1 style={{marginBottom:'15px'}}>Featured Projects</h1>
      <div className='featured-container' style={isTabletOrMobile?{alignItems:'center',justifyContent:'center'}:{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
        <div >
          <Atropos
          className='atropos'
          style={isTabletOrMobile?{width:'90%', boxShadow:'2px 2px 10px #fff',marginTop:'20px'}:{width:'500px', boxShadow:'2px 2px 10px #fff',marginTop:'20px'}}
          >            
          <img data-atropos-offset="1" data-atropos-opacity="0.3;1" src={postbits} alt='postBits' style={{width:'500px'}} />
          <h1 className='title' style={{color:'yellow'}} data-atropos-offset="20.5" >PostBits</h1>
          <p className='paragraph'>PostBits is a platform where users can share small bits of knowledge/facts to various people across the internet. </p>
          <button className='button' style={{padding:'10px', width:'80px', border:'none', borderRadius:'5px', background:'#3795BD', cursor:'pointer'}} data-atropos-offset="22.5">
            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='asads github' style={{width:'30px'}} />
          </button>
          <button className='button1' style={{padding:'10px', width:'80px', border:'none', borderRadius:'5px', background:'#3795BD',cursor:'pointer'}} data-atropos-offset="22.5"> <img src='https://cdn-icons-png.flaticon.com/512/246/246507.png' alt='asads github' style={{width:'30px'}} /></button>
          </Atropos>
        </div>

        <div >
          <Atropos
          className='atropos'
          style={isTabletOrMobile?{width:'90%', boxShadow:'2px 2px 10px #fff',marginTop:'20px'}:{width:'500px', boxShadow:'2px 2px 10px #fff',marginTop:'20px'}}
          >                 
          <img data-atropos-offset="1" data-atropos-opacity="0.3;1" src={DevConnect} alt='postBits' style={{width:'500px'}} />
          <h1 className='title' style={{color:'yellow'}} data-atropos-offset="20.5" >DevConnect</h1>
          <p className='paragraph'>DevConnect is a platform created for hackathon management and provides features which allows several users to create their own teams for hackathons.</p>
          <button className='button' style={{padding:'10px', width:'80px', border:'none', borderRadius:'5px', background:'#3795BD', cursor:'pointer'}} data-atropos-offset="22.5">
            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='asads github' style={{width:'30px'}} />
          </button>
          <button className='button1' style={{padding:'10px', width:'80px', border:'none', borderRadius:'5px', background:'#3795BD',cursor:'pointer'}} data-atropos-offset="22.5"> <img src='https://cdn-icons-png.flaticon.com/512/246/246507.png' alt='asads github' style={{width:'30px'}} /></button>
          </Atropos>
        </div>
      </div>
      <h1 style={{marginTop:'35px', marginBottom:'30px'}}>Notable Projects</h1>
      <div className='notable-projects' style={{marginBottom:'150px', display:'flex', justifyContent:'space-around',flexWrap:'wrap'}}>

        <div style={{background:'#333333', borderRadius:'10px', padding:'', width:'280px', display:'flex', flexDirection:'column',marginTop:'15px'}}>
          <img className='project_img' style={{width:'100%', height:'150px', borderRadius:'10px 10px 0px 0px'}} src={youtube} alt='youtube clone' />
          <p style={{color:'#3795BD', fontSize:'24px',fontWeight:'bold', marginTop:'15px', textAlign:'left', marginLeft:'8%'}}>BetterTube</p>
          <p style={{textAlign:'left', fontSize:'13px', width:'80%', marginTop:'10px', marginLeft:'8%'}}>A Youtube Clone using YouTube V3 Api</p>
          <div style={{marginTop:'10px', display:'flex', cursor:'pointer', paddingBottom:'15px'}}>
          <p onClick={()=>{
            window.open('https://google.com','_blank')
          }} className='project_p' style={{marginLeft:'8%', color:'#FDD36A'}}>Demo</p>
          <p  onClick={()=>{
            window.open('https://google.com','_blank')
          }} className='project_p' style={{marginLeft:'8%', color:'#FDD36A'}}>Code</p>
          </div>
        </div>

        <div style={{background:'#333333', borderRadius:'10px', padding:'', width:'280px', display:'flex', flexDirection:'column',marginTop:'15px'}}>
          <img className='project_img' style={{width:'100%', height:'150px', borderRadius:'10px 10px 0px 0px'}} src={portfolio} alt='youtube clone' />
          <p style={{color:'#3795BD', fontSize:'24px',fontWeight:'bold', marginTop:'15px', textAlign:'left', marginLeft:'8%'}}>Portfolio</p>
          <p style={{textAlign:'left', fontSize:'13px', width:'80%', marginTop:'10px', marginLeft:'8%'}}>A portfolio inspired by Visual studio code made using React and Redux</p>
          <div style={{marginTop:'10px', display:'flex', cursor:'pointer', paddingBottom:'15px'}}>
          <p onClick={()=>{
            window.open('https://google.com','_blank')
          }} className='project_p' style={{marginLeft:'8%', color:'#FDD36A'}}>Demo</p>
          <p  onClick={()=>{
            window.open('https://google.com','_blank')
          }} className='project_p' style={{marginLeft:'8%', color:'#FDD36A'}}>Code</p>
          </div>
        </div>

        <div style={{background:'#333333', borderRadius:'10px', padding:'', width:'280px', display:'flex', flexDirection:'column',marginTop:'15px'}}>
          <img className='project_img' style={{width:'100%', height:'150px', borderRadius:'10px 10px 0px 0px'}} src={weather} alt='youtube clone' />
          <p style={{color:'#3795BD', fontSize:'24px',fontWeight:'bold', marginTop:'15px', textAlign:'left', marginLeft:'8%'}}>Weather.io</p>
          <p style={{textAlign:'left', fontSize:'13px', width:'80%', marginTop:'10px', marginLeft:'8%'}}>An advanced weather displaying website made using node.js</p>
          <div style={{marginTop:'10px', display:'flex', cursor:'pointer', paddingBottom:'15px'}}>
          <p onClick={()=>{
            window.open('https://google.com','_blank')
          }} className='project_p' style={{marginLeft:'8%', color:'#FDD36A'}}>Demo</p>
          <p  onClick={()=>{
            window.open('https://google.com','_blank')
          }} className='project_p' style={{marginLeft:'8%', color:'#FDD36A'}}>Code</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Projects