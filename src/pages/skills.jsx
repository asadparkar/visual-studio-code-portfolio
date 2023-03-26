import React from 'react'
import Skill from '../assets/skills';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';


const Skills = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const activeSkill = useSelector((state)=>state.changeActiveSkill);
  return (
    <div style={{fontFamily:'Consolas'}}>
    {isTabletOrMobile && 
    <div style={{height:'120vh', background:'#1e1e1e', color:'white',padding:'15px'}}>
        <h3 style={{color:'#B4E4FF', marginBottom:'15px'}}>&lt;FRONTEND&gt;</h3>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• HTML</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Vanilla CSS</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• JavaScript</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• React</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• TailwindCSS</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Material UI</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Next.js</p>
        <h3 style={{color:'#B4E4FF', marginTop:'15px'}}>&lt;/FRONTEND&gt;</h3>

        <h3 style={{color:'#B4E4FF', marginBottom:'15px',marginTop:'30px'}}>&lt;BACKEND&gt;</h3>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Node.js</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Express.js</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Firebase</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• NGINX</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• AWS | Google Cloud</p>
        <h3 style={{color:'#B4E4FF', marginTop:'15px'}}>&lt;/BACKEND&gt;</h3>

        <h3 style={{color:'#B4E4FF', marginBottom:'15px',marginTop:'30px'}}>&lt;DATABASE&gt;</h3>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• MongoDB</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• SQL</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Firebase realtime db</p>
        <h3 style={{color:'#B4E4FF', marginTop:'15px'}}>&lt;/DATABASE&gt;</h3>

        <h3 style={{color:'#B4E4FF', marginBottom:'15px',marginTop:'30px'}}>&lt;TOOLS&gt;</h3>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Git</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Postman</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Chrome Developer Tools</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• SVGs & Figma</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• JWT Authentication + Password Hashing</p>
        <h3 style={{color:'#B4E4FF', marginTop:'15px'}}>&lt;/TOOLS&gt;</h3>
    </div>
    }
    {!isTabletOrMobile &&
    <div style={{height:'100vh', background:'#1e1e1e', color:'white', display:'flex', padding:'15px'}}>
      <div style={{}}>
        <Skill />
      </div>

      <div style={{background:'rgba(255,255,255,0.3)', height:'340px', width:'300px', borderRadius:'10px', padding:'10px'}}>
      <div className='frontend' style={{}}>
      <h2 style={{color:'#FFB84C', marginBottom:'10px'}}>Skills</h2>

      {activeSkill === 0 && <h4>Hover on different parts to reveal skills 🤓</h4>}
      {activeSkill === 1 &&
      <div>
        <h3 style={{color:'#B4E4FF', marginBottom:'15px'}}>&lt;FRONTEND&gt;</h3>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• HTML</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Vanilla CSS</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• JavaScript</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• React</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• TailwindCSS</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Material UI</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Next.js</p>

        <h3 style={{color:'#B4E4FF', marginTop:'15px'}}>&lt;/FRONTEND&gt;</h3>
      </div>
      }

      {activeSkill === 2 &&
      <div>
        <h3 style={{color:'#B4E4FF', marginBottom:'15px'}}>&lt;TYPING&gt;</h3>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• 100 wpm typist</p>

        <h3 style={{color:'#B4E4FF', marginTop:'15px'}}>&lt;/TYPING&gt;</h3>
      </div>
      }
      {activeSkill === 3 &&
      <div>
        <h3 style={{color:'#B4E4FF', marginBottom:'15px'}}>&lt;BACKEND&gt;</h3>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Node.js</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Express.js</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Firebase</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• NGINX</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• AWS | Google Cloud</p>
        <h3 style={{color:'#B4E4FF', marginTop:'15px'}}>&lt;/BACKEND&gt;</h3>
      </div>
      }
      {activeSkill === 4 &&
      <div>
        <h3 style={{color:'#B4E4FF', marginBottom:'15px'}}>&lt;DATABASE&gt;</h3>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• MongoDB</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• SQL</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Firebase realtime db</p>
        <h3 style={{color:'#B4E4FF', marginTop:'15px'}}>&lt;/DATABASE&gt;</h3>
      </div>
      }

      {activeSkill === 5 &&
      <div>
        <h3 style={{color:'#B4E4FF', marginBottom:'15px'}}>&lt;TOOLS&gt;</h3>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Git</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Postman</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• Chrome Developer Tools</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• SVGs & Figma</p>
        <p style={{marginLeft:'20px', marginTop:'6px'}}>• JWT Authentication + Password Hashing</p>
        <h3 style={{color:'#B4E4FF', marginTop:'15px'}}>&lt;/TOOLS&gt;</h3>
      </div>
      }

      </div>


      </div>
    </div>}
    </div>
  )
}

export default Skills