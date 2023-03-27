import React, { useEffect, useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeState } from '../actions';
import { useMediaQuery } from 'react-responsive';


const Topbar = () => {
  const location = useLocation();
const selected = useSelector((state)=>state.changeTabState);
const dispatch = useDispatch();
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
const navigate = useNavigate();

useEffect(()=>{
  if (location.pathname === '/'){
    dispatch(changeState(1))
  }
  if (location.pathname === '/about'){
    dispatch(changeState(2))
  }
  if (location.pathname === '/skills'){
    dispatch(changeState(3))
  }
  if (location.pathname === '/projects'){
    dispatch(changeState(4))
  }
  if (location.pathname === '/victory'){
    dispatch(changeState(5))
  }
  if (location.pathname === '/contact'){
    dispatch(changeState(6))
  }
  if (location.pathname === "/settings"){
    dispatch(changeState(0))
  }
})

const handleClick = (index)=>{
  dispatch(changeState(index))
  if (index === 1){
    navigate('/')
  }
  if (index === 2){
    navigate('/about')
  }
  if (index === 3){
    navigate('/skills')
  }
  if (index === 4){
    navigate('/projects')
  }
  if (index === 5){
    navigate('/victory')
  }
  if (index === 6){
    navigate('/contact')
  }
}

  return (
    <div style={{background:'#252526', width:'100%',height:'40px'}}>
      <div style={{display:'flex', alignItems:'center', fontFamily:'Consolas', overflowY:'scroll'}}>

        <div className={selected===1?'active':''} style={{color:'white', fontSize:'14px', borderRight:'1px solid #000', width:'110px', background:'#2d2d2d', height:'40px', padding:'5px', display:'flex', justifyContent:'center', alignItems:'center', letterSpacing:'0.1px', cursor:'pointer'}} onClick={()=>{handleClick(1)}} >
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='react' style={{width:'18px', marginRight:'6px'}} />
          <p>home.jsx</p>
        </div>

        <div className={selected===2?'active':''} style={{color:'white', fontSize:'14px', borderRight:'1px solid #000', width:'110px', background:'#2d2d2d', height:'40px', padding:'5px', display:'flex', justifyContent:'center', alignItems:'center', letterSpacing:'0.1px', cursor:'pointer'}} onClick={()=>{handleClick(2)}} >
          <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' alt='react' style={{width:'18px', marginRight:'6px'}} />
          <p>about.git</p>
        </div>

        <div className={selected===3?'active':''} style={{color:'white', fontSize:'14px', borderRight:'1px solid #000', width:'130px', background:'#2d2d2d', height:'40px', padding:'5 px', display:'flex', justifyContent:'center', alignItems:'center', letterSpacing:'0.1px',cursor:'pointer'}} onClick={()=>{handleClick(3)}}  >
          <img src='https://cdn-icons-png.flaticon.com/512/174/174854.png' alt='react' style={{width:'18px', marginRight:'6px'}} />
          <p>skills.html</p>
        </div>

        <div className={selected===4?'active':''} style={{color:'white', fontSize:'14px', borderRight:'1px solid #000', width:'125px', background:'#2d2d2d', height:'40px', padding:'5px', display:'flex', justifyContent:'center', alignItems:'center', letterSpacing:'0.1px',cursor:'pointer'}}  onClick={()=>{handleClick(4)}} >
          <img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt='react' style={{width:'18px', marginRight:'6px'}} />
          <p>projects.js</p>
        </div>

        <div className={selected===5?'active':''} style={{color:'white', fontSize:'14px', borderRight:'1px solid #000', width:'134px', background:'#2d2d2d', height:'40px', padding:'5px', display:'flex', justifyContent:'center', alignItems:'center', letterSpacing:'0.1px',cursor:'pointer'}}  onClick={()=>{handleClick(5)}} >
          <img src='https://www.skillreactor.io/css.png' alt='react' style={{width:'18px', marginRight:'6px'}} />
          <p>victory.css</p>
        </div>

        <div className={selected===6?'active':''} style={{color:'white', fontSize:'14px',  width:'130px', background:'#2d2d2d', height:'40px', padding:'5px', display:'flex', justifyContent:'center', alignItems:'center', letterSpacing:'0.1px',cursor:'pointer'}}  onClick={()=>{handleClick(6)}} >
          <img src='https://i.imgur.com/bPbrDBx.png' alt='react' style={{width:'18px', marginRight:'6px'}} />
          <p>contact.json</p>
        </div>

      </div>
    </div>
  )
}

export default Topbar