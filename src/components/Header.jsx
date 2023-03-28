import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import Cross from '../assets/Cross';
import Expand from '../assets/expand';
import Minimize from '../assets/Minimize';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { changeFile } from '../actions';
import {Link} from 'react-router-dom'

const Header = () => {
    const handleCrossClick = ()=>{
        window.close();
    }
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isFileToggeled = useSelector((state)=>state.changeFileState);
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(changeFile())
  }

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
                <p style={{opacity:0.7}} onClick={handleClick}>File</p>
                {isFileToggeled && <div style={{width:'13rem',height:'70vh',position:'absolute',background:'#252526',opacity:'100%', padding:'15px',border:'0.5px solid gray'}}>
                    <Link target={'_blank'} to='https://github.com/asadparkar/visual-studio-code-portfolio'>
                       <div style={{display:'flex'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" style={{fill:'white'}}/></svg>
                            <p className='file_item' style={{fontSize:'15px',padding:'5px',marginLeft:'10px'}}>Source Code</p>
                       </div>
                    </Link>
                    <Link target={'_blank'} to='https://www.linkedin.com/in/asad-parkar-a5a995216/'>
                       <div style={{display:'flex',marginTop:'5px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" style={{fill:'white'}} /></svg>
                            <p className='file_item' style={{fontSize:'15px',padding:'5px',marginLeft:'10px'}}>LinkedIn</p>
                       </div>
                    </Link>
                    <Link target={'_blank'} to='https://drive.google.com/drive/u/0/folders/1dusY-Mwa7z41QMxCo-5WQ9El5cDCYtPI'>
                       <div style={{display:'flex',marginTop:'5px',alignItems:'center'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"><path d="M13.387 17.375c-.679.385-2.076.385-2.756 0-.097 1.239-1.419 2.625-3.631 2.625v4h10v-4c-2.275 0-3.516-1.386-3.613-2.625zm2.613 5.625h-8v-2h8v2zm8-19.993c-.377 4.162-2.872 8.083-7.039 9.392.334-.551.665-1.157.984-1.816 2.959-1.515 4.097-4.265 4.527-6.279h-2.78c.058-.551.103-.779.103-1.297h4.205zm-16.961 9.392c-4.167-1.309-6.662-5.23-7.039-9.392h4.205c0 .518.045.746.103 1.297h-2.78c.431 2.015 1.568 4.764 4.527 6.279.319.659.65 1.265.984 1.816zm6.375 3.677c.612-2.957 4.965-5.038 5.39-12.958.138-2.574-4.129-3.118-6.795-3.118-2.754 0-6.915.423-6.825 2.8.309 8.18 4.8 10.279 5.421 13.276.639.534 2.168.534 2.809 0zm-6.891-13.373c0-.839 2.628-1.456 5.485-1.456 2.716 0 5.492.667 5.492 1.542 0 .9-2.911 1.307-5.492 1.307-2.458.001-5.485-.372-5.485-1.393zm2.233 2.421c.308 2.767 1.083 5.562 2.491 7.995-1.915-2.211-3.454-4.886-4.075-8.304.506.132 1.035.236 1.584.309z" style={{fill:'white'}} /></svg>
                            <p className='file_item' style={{fontSize:'15px',padding:'5px',marginLeft:'10px'}}>Certificates</p>
                       </div>
                    </Link>
                </div>}
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