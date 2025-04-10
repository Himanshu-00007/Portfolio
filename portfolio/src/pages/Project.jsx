import React from 'react';
import "../App.css";
import Background from './Background';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Typewriter} from "react-simple-typewriter";

export default function Project() {
    const navigate=useNavigate();
  return (
    <div className='projects'>
        <Background/>
        <Box flexGrow={1}>
      <AppBar position="fixed" sx={{backgroundColor:"#F8FAFC"}}>
        <Toolbar className='navbar'>
        <div className="nav-left">
        <Button  onClick={()=>navigate("/")}>Home</Button>
         </div>
         <div className="nav-right">
         <Button onClick={()=>navigate("/about")}>About</Button>
         <Button  onClick={()=>navigate("/projects")}>Projects</Button>
         <Button  onClick={()=>navigate("/contact")}>Contact</Button>
         <Button >Resume</Button>
        </div>
        </Toolbar>
      </AppBar>
      </Box> 
      <div className="container3"> 
        <h1 style={{textAlign:"center",fontWeight:"750",fontSize:"50px",color:"#1111e69c",marginBottom:0}}>Featured Projects</h1>
        <p style={{textAlign:"center",fontSize:"20px",color:"grey"}}>Crafted with code, Powered by passion.</p>
      </div>
      <div className="projectcard">
        <div className="card">
          <div className="info">
            <h3 style={{color:"#1111e69c",fontSize:"30px",marginBottom:0}}>CONNECTLY</h3>
            <p style={{lineHeight:"1.625",fontSize:"18px",fontWeight:'525'}}>Dynamic platform designed to seamlessly connect people, ideas, and opportunities through intuitive digital experiences.</p>
            <p style={{lineHeight:"1.625",color:"grey"}}>Connectly is a modern platform that bridges people and ideas through seamless digital interaction.It empowers users to collaborate, communicate, and grow in a connected ecosystem.With a sleek interface and smart features, Connectly makes meaningful connections effortless.</p>
            <div className="btn">
              <Button style={{color: '#6366F1',border:"2px solid"}} href="https://github.com/Himanshu-00007/CONNECTLY">Code Base</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button style={{color: '#6366F1',border:"2px,solid"}} href="https://connectlyfrontened.onrender.com">Live Preview</Button>
            </div>

          </div>
          <div className="ui">
            <img src="/image.png"></img>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h3 style={{color:"#1111e69c",fontSize:"30px",marginBottom:0}}>HomeX</h3>
            <p style={{lineHeight:"1.625",fontSize:"18px",fontWeight:'525'}}>Rental marketplace, connecting travelers with hosts offering unique stays. It provides a seamless booking experience with diverse accommodation options.</p>
            <p style={{lineHeight:"1.625",color:"grey"}}>Stay rental platform that links travelers with hosts offering distinctive homes and spaces. It offers hassle-free booking, secure transactions, and a wide range of stay choices for every kind of traveler. With its user-friendly interface, HomeX makes finding the perfect stay simple and enjoyable.</p>
            <div className="btn">
              <Button style={{color: '#6366F1',border:"2px solid"}} href="https://github.com/Himanshu-00007/HomeX">Code Base</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button style={{color: '#6366F1',border:"2px,solid"}} href="https://homex-1d2l.onrender.com">Live Preview</Button>
            </div>

          </div>
          <div className="ui">
            <img src="/homex.png"></img>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h3 style={{color:"#1111e69c",fontSize:"30px",marginBottom:0}}>IntelliMate</h3>
            <p style={{lineHeight:"1.625",fontSize:"18px",fontWeight:'525'}}>An intelligent chatbot that understands, assists, and elevates user experience—anytime, anywhere.</p>
            <p style={{lineHeight:"1.625",color:"grey"}}>Our chatbot is more than just a virtual assistant — it listens, understands, and responds like a real human.Whether you need help, info, or just a quick chat, it's always there, 24/7.Built with smart AI, it learns from every interaction to serve you better.Think of it as your friendly digital companion, just a message away.</p>
            <div className="btn">
              <Button style={{color: '#6366F1',border:"2px solid"}} >Code Base</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button style={{color: '#6366F1',border:"2px,solid"}}>Live Preview</Button>
            </div>

          </div>
          <div className="ui">
            <img src="/intellimate.png"></img>
          </div>
        </div>
      </div>
      
    </div>
  )
}
