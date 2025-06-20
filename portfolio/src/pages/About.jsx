import * as React from 'react';
import "../App.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Background from './Background';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function About() {
    const navigate=useNavigate();
  return (
    <div className='about'>
        <Background/>
        <Box flexGrow={1}>
      <AppBar position="fixed" sx={{backgroundColor:"#F8FAFC"}}>
        <Toolbar className='navbar'>
        <div className="nav-left">
        <Button  onClick={()=>navigate("/")}>Home</Button>
         </div>
         <div className="nav-right">
         <Button  onClick={()=>navigate("/about")}>About</Button>
         <Button  onClick={()=>navigate("/projects")}>Projects</Button>
         <Button  onClick={()=>navigate("/contact")}>Contact</Button>
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
      <h1 style={{textAlign:"center",fontWeight:"700",fontSize:"40px"}}>About Me</h1>
      <div className="container1">
        <div className="theory1">
            <h1 style={{fontSize:"50px",marginTop:"0",color:"#1111e69c"}}>Himanshu Pandey</h1>
            <p style={{fontSize:"1.5rem",fontWeight:"500"}}>Mern Stack Developer</p>
            <p style={{fontSize:"16px",color:"#111827",lineHeight:"1.625"}}>Hey there! I’m Himanshu Pandey, a passionate and curious developer currently pursuing my B.Tech in Information Technology from Bhagwan Parshuram Institute of Technology.</p>
            <p style={{fontSize:"16px",color:"#111827",lineHeight:"1.625"}}>I love bringing ideas to life through code—especially using the MERN stack. Whether it’s building sleek, responsive websites or developing solutions that solve real-world problems, I find joy in creating things that matter.</p>
            <p style={{fontSize:"16px",color:"#111827",lineHeight:"1.625"}}>My journey in tech is fueled by creativity, continuous learning, and the drive to make an impact. From collaborating on meaningful projects to exploring the latest in development and design, I’m always looking for ways to level up and grow.</p>
            <p style={{fontSize:"16px",color:"#111827",lineHeight:"1.625"}}>Outside of coding, I enjoy problem-solving, diving into new technologies, and challenging myself to think beyond the usual.</p>
            <p style={{fontSize:"16px",color:"#111827",lineHeight:"1.625"}}>Let’s connect and build something awesome together!</p>
            <div className='bkwas'>
                <EmailIcon sx={{ color: '#3B82F6' }}/>
                <p>himanshupandey2003@gmail.com</p>
            </div>
        </div>
        <div className="image1">
            <img src="/dp.jpg"></img>
        </div>


      </div>
    </div>
  )
}
