import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { changeState } from '../actions';
const Sidebar = () => {
  const [isSidebarToggelled, setSidebarToggle] = useState(true);
  const [isPortfolioToggelled, setPortfoioToggled] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [extensionClicked,setExtension] = useState(false);
  const handleExplorerClick = ()=>{
    if (isTabletOrMobile){
      return;
    }
    if (extensionClicked === true){
      setExtension(false);
      return
    }
    setSidebarToggle(!isSidebarToggelled)
  }
  const handlePortfolioClick = ()=>{
    setPortfoioToggled(!isPortfolioToggelled);
  }
  const handleExtensionClick = ()=>{
    setExtension(true)
  }

  useEffect(()=>{
    if (isTabletOrMobile){
      setSidebarToggle(false);
    }
  }, [])

  return (
    <div style={{height:'100vh', display:'flex', fontFamily:'Roboto'}}>
      <div style={{background:'#333333', width:'50px', display:'flex', paddingTop:'20px',flexDirection:'column', alignItems:'center'}}>
        <div className='explorer' style={{cursor:'pointer'}}>
          <svg onClick={handleExplorerClick} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(106, 115, 125)" class="Sidebar_icon__czDJe"><path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"></path></svg>
          </div>
          <div>
          <svg onClick={handleExtensionClick} style={{fill:'white',opacity:0.2,marginTop:'15px'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 11h-11v-11h11v11zm13 0h-11v-11h11v11zm-13 13h-11v-11h11v11zm13 0h-11v-11h11v11z"/></svg>
          </div>
          <div style={{marginTop:'72vh',cursor:'pointers'}} onClick={()=>navigate('/settings')}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgba(225, 228, 232,0.5)" class="Sidebar_icon__czDJe"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0112 8.57 3.44 3.44 0 0115.43 12a3.43 3.43 0 11-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0013.71 12a1.71 1.71 0 10-2.66 1.422z"></path></svg>
          </div>
      </div>
      {isSidebarToggelled && <div style={{background:'#252526', width:'250px', color:'white'}}>
        <div style={{height:'40px', fontWeight:'300', padding:'10px', fontSize:'13px'}}>
          {extensionClicked?'EXTENSIONS':'EXPLORER'}
        </div>
        {!extensionClicked && <div className='portfolio' style={{padding:'8px', cursor:'pointer'}}>
        <p style={{fontSize:'15px', fontFamily:'Consolas',fontWeight:'600'}} onClick={handlePortfolioClick} > > PORTFOLIO</p>
           {isPortfolioToggelled && 
            <div className='portfolio-items' style={{marginLeft:'15px'}} >
              <div style={{display:'flex', marginTop:'15px', padding:'5px'}} onClick={()=>{
                dispatch(changeState(1));
                navigate('/') ;
                }}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='react-logo' style={{width:'17px', marginRight:'7px'}} />
               <p style={{fontSize:'14px', color:'#5ab570'}}>home.jsx</p>
              </div>

              <div style={{display:'flex', marginTop:'15px',padding:'5px'}} onClick={()=>{dispatch(changeState(2)); navigate('/about') }}>
                <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' alt='react-logo' style={{width:'17px', marginRight:'7px'}} />
               <p style={{fontSize:'14px', color:'#5ab570'}}>about.git</p>
              </div>

              <div style={{display:'flex', marginTop:'15px',padding:'5px'}} onClick={()=>{dispatch(changeState(3)); navigate('/skills') }}>
                <img src='https://cdn-icons-png.flaticon.com/512/174/174854.png' alt='html-logo' style={{width:'17px', marginRight:'7px'}} />
               <p style={{fontSize:'14px', color:'#c59557'}}>skills.html</p>
              </div>

              <div style={{display:'flex', marginTop:'15px',padding:'5px'}} onClick={()=>{dispatch(changeState(4)); navigate('/projects') }}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' alt='html-logo' style={{width:'17px', marginRight:'7px'}} />
               <p style={{fontSize:'14px', color:'#b18d12'}}>projects.js</p>
              </div>

              <div style={{display:'flex', marginTop:'15px',padding:'5px'}} onClick={()=>{dispatch(changeState(5)); navigate('/victory') }}>
                <img src='https://camo.githubusercontent.com/1b227190d7879967e7ef7cf993b85b647e78a26477c212b5eb158e2b062e070f/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f362f36322f435353335f6c6f676f2e7376672f38303070782d435353335f6c6f676f2e7376672e706e67' alt='html-logo' style={{width:'17px', marginRight:'7px'}} />
               <p style={{fontSize:'14px', color:'#3f99e2'}}>victory.css</p>
              </div>

              <div style={{display:'flex', marginTop:'15px', padding:'5px'}} onClick={()=>{dispatch(changeState(6)); navigate('/contact') }}>
                <img src='https://i.imgur.com/bPbrDBx.png' alt='html-logo' style={{width:'17px', marginRight:'7px'}} />
               <p style={{fontSize:'14px', color:'#bcaa77'}}>contact.json</p>
              </div>
            </div>
           }
        </div>}
        {extensionClicked &&
        <div style={{padding:'15px'}}>
          Coming Soon...
        </div>
        }
      </div> }
    </div>
  )
}

export default Sidebar