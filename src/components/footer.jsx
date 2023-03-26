import React from 'react'
import branch from '../assets/branch.png'
import { useMediaQuery } from 'react-responsive';


const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div style={isTabletOrMobile?{background:'#007acc', padding:'10px', fontFamily:'Ubuntu', color:'white', display:'flex',  alignItems:'center', fontSize:'10px'}:{background:'#007acc', padding:'10px', fontFamily:'Ubuntu', color:'white', display:'flex',  alignItems:'center', fontSize:'14px'}}>

        <div style={{fontSize:'14px', cursor:'pointer'}} className='footer-item' >
            <img src={branch} alt='git branch' style={{width:'12px'}} /> master*
        </div>

        <div style={{marginLeft:'auto', display:'flex', alignItems:'center', cursor:'pointer'}}>
            <div className='footer-item'>
                <img  style={{width:'11px'}} src='https://i.imgur.com/mpuIJgL.png' alt='vs code live server' /> Go Live  
            </div>
            <div className='footer-item' style={{marginLeft:'30px'}}>
                Babel JavaScript  
            </div>
            <div className='footer-item' style={{marginLeft:'30px'}}>
                 UTF-8  
            </div>
            <div >
                <img className='footer-item' style={{width:'18px', marginLeft:'30px',}} src='https://i.imgur.com/r0UPgwN.png' alt='Visual studio code portfolio' />
            </div>
            
            </div>
            
        </div>
    )
}

export default Footer