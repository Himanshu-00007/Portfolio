import * as React from 'react';
import "../App.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import {Typewriter} from "react-simple-typewriter";
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Background from './Background';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate=useNavigate();
  
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/-himanshu01");
  };
  const handlegithubClick = () => {
    window.open("https://github.com/Himanshu-00007");
  };
  const handleemailClick = () => {
    window.open("mailto:himanshupandey2003@example.com");
  };
  const handleinstagramClick = () => {
    window.open("https://www.instagram.com/d_himanshu_here/");
  };
  return (
    <div className='home'>
      <Background/>
        <Box flexGrow={1}>
  <AppBar position="fixed" sx={{ backgroundColor: "#F8FAFC" }}>
    <Toolbar className="navbar" sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: { xs: 1, sm: 0 }
    }}>
      <div className="nav-left">
        <Button onClick={() => navigate("/")}>Home</Button>
      </div>
      <div className="nav-right" style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        <Button onClick={() => navigate("/about")}>About</Button>
        <Button onClick={() => navigate("/projects")}>Projects</Button>
        <Button onClick={() => navigate("/contact")}>Contact</Button>
        <Button
  sx={{ color: "gray", fontWeight: 600 ,textTransform:"none",fontSize:16}}
  component="a"
  href="/Himanshu_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  Resume
</Button>
      </div>
    </Toolbar>
  </AppBar>
</Box>

      <div className="container">
        <div className="theory">
          <h1 style={{fontSize:"45px",marginBottom:"0.3rem",color:"#0F172A"}}>Namaste,</h1>
          <h1 style={{fontSize:"60px",marginTop:"0"}}>I'm <span><Typewriter words={["Himanshu Pandey","a MERN Stack Developer"]} loop={false} typeSpeed={100} deleteSpeed={50} cursorStyle='_' /></span></h1>
          <p style={{fontSize:"16px",color:"#111827",lineHeight:"1.625"}}>A tech enthusiast who loves building things that matter.
          With a curious mind and a creative spark, I bring together design, code, and innovation to craft seamless digital experiences. From engineering user-centric solutions to experimenting with the latest in tech, I’m all about learning, evolving, and making an impact — one line of code at a time.</p>
          
          <Button
            variant="outlined"
            href="https://www.linkedin.com/in/-himanshu01"
            sx={{
            background: 'transparent',
            color: '#6366F1',
            padding: '10px 25px',
            fontSize: '1rem',
             borderRadius: '10px',
             textTransform: 'none',
             border: '2px solid',
             transition: 'all 0.3s ease-in-out',
             '&:hover': {
              background: 'linear-gradient(90deg, rgba(246, 59, 165, 0.1), rgba(99, 102, 241, 0.1))',
              transform: 'scale(1.05)',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.25)',},}} >
             Let’s Connect
             </Button>
             <div className="icons">
              <LinkedInIcon className="linkedin" fontSize='large' onClick={handleLinkedInClick}/>
              <GitHubIcon className="github" fontSize='large' onClick={handlegithubClick}/>
              <EmailIcon className="email" fontSize='large' onClick={handleemailClick}/>
              <InstagramIcon className="instagram" fontSize='large' onClick={handleinstagramClick}/>
             </div>
          </div>
          <div className="image">
          <img src="/profile.jpg"/>
          </div>
       </div>
    </div>
  )
}
