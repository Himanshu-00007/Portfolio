import * as React from 'react';
import "../App.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
  import {Typewriter} from "react-simple-typewriter";
import { Button } from '@mui/material';
import Background from './Background';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

export default function Contact() {
    const navigate=useNavigate();
  return (
    <div className="contact">
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
      <div className="container2">
        <div className="theory2">
        <h1 style={{textAlign:"center",fontWeight:"750",fontSize:"30px",color:"#1111e69c"}}><Typewriter words={["Get in Touch"]} typeSpeed={100} deleteSpeed={50} loop={false}/></h1>
        <TextField id="outlined-basic" label="Your name" variant="outlined" sx={{ width: '300px' }}/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <TextField id="outlined-basic" label="abc@gmail.com" variant="outlined" sx={{ width: '300px' }}/>
        <div>
            <br></br>
        <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Your message" id="fullWidth" multiline rows={10} sx={{ width: '617px' }}/>
       </Box>
       <br></br>
        <Button
            variant="outlined"
            onClick={()=>navigate("/")}
           
            sx={{
            background: 'transparent',
            width:"617px",
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
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.25)',},}}>
             Send Message
        </Button>
        </div>
        </div>
      </div>
    </div>
  )
}
