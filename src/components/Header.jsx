import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import Cross from '../assets/Cross';
import Expand from '../assets/expand';
import Minimize from '../assets/Minimize';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
    const handleCrossClick = ()=>{
        window.close();
    }
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div>
    {!isTabletOrMobile && 
<div style={{background:'#323233', height:'35px', padding:'5px', color:'white', fontFamily:'Roboto', fontWeight:'300', cursor:'pointer', borderBottom:'1px solid rgba(0,0,0,0.1)'}}>
      <div style={{display:'flex', width:'100%'}}>


        <div style={{display:'flex', alignItems:'center', marginRight:'auto'}}>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' alt='Visual Studio code' style={{width:'17px', marginRight:'8px'}} />
            </div>

            <div style={{marginRight:'13px', padding:'0 5px 0 5px', borderRadius:'3px'}} className="mainmenu">
                <p style={{opacity:0.7}}>File</p>
                {/* <div style={{width:'10rem',height:'22rem',position:'absolute',background:'#252526',opacity:'100%', padding:'15px',border:'0.5px solid gray'}}>
                    <p style={{fontSize:'13px'}}>Source Code</p>

                </div> */}
            </div>
            <div style={{marginRight:'13px', opacity:0.7, padding:'0 5px 0 5px', borderRadius:'3px'}} className="mainmenu">
                <p>Edit</p>
            </div>
            <div style={{marginRight:'13px', opacity:0.7, padding:'0 5px 0 5px', borderRadius:'3px'}} className="mainmenu">
                <p>Selection</p>
            </div>
            <div style={{marginRight:'13px', opacity:0.7, padding:'0 5px 0 5px', borderRadius:'3px'}} className="mainmenu">
                <p>View</p>
            </div>
            <div style={{marginRight:'13px', opacity:0.7, padding:'0 5px 0 5px', borderRadius:'3px'}} className="mainmenu">
                <p onClick={()=>{alert("Build Sucess!")}}>Run</p>
            </div>
            <div style={{marginRight:'13px', opacity:0.7, padding:'0 5px 0 5px', borderRadius:'3px'}} className="mainmenu">
                <p>Terminal</p>
            </div>
            <div style={{marginRight:'13px', opacity:0.7, padding:'0 5px 0 5px', borderRadius:'3px'}} className="mainmenu">
                <p>Help</p>
            </div>
        </div>

        <div style={{display:'flex', marginRight:'auto', opacity:'0.5'}}>
          <p>Portfolio - visual studio code</p>
        </div>

        <div style={{display:'flex', marginLeft:'auto', alignItems:'center', fontSize:'12px'}}>
        <p style={{marginLeft:'25px', padding:'5px'}} className='mainmenu'>━</p>
        <p className='mainmenu' style={{marginLeft:'25px', padding:'5px'}} >☐</p>
        <p style={{marginLeft:'25px', padding:'5px'}} className='cross-hover' onClick={handleCrossClick}>✖</p>

        </div>

      </div>
    </div>
    }
    </div>

    
  )
}

export default Header