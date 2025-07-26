import React, { useEffect, useState } from 'react';
import "../App.css";
import Background from './Background';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function Project() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1450);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='projects'>
      <Background />
      <Box flexGrow={1}>
        <AppBar position="fixed" sx={{ backgroundColor: "#F8FAFC" }}>
          <Toolbar className='navbar'>
            <div className="nav-left">
              <Button onClick={() => navigate("/")}>Home</Button>
            </div>
            <div className="nav-right">
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

      <div className="container3">
        <h1 style={{ textAlign: "center", fontWeight: "750", fontSize: "50px", color: "#1111e69c", marginBottom: 0 }}>Featured Projects</h1>
        <p style={{ textAlign: "center", fontSize: "20px", color: "grey" }}>Crafted with code, Powered by passion.</p>
      </div>

      <div className="projectcard">
        {/* Project 1 */}
        <div className="card">
          <div className="info">
            <h3 style={{ color: "#1111e69c", fontSize: "30px", marginBottom: 0 }}>CONNECTLY</h3>
            <p style={{ lineHeight: "1.625", fontSize: "18px", fontWeight: '525' }}>
              Dynamic platform designed to seamlessly connect people, ideas, and opportunities through intuitive digital experiences.
            </p>
            <p style={{ lineHeight: "1.625", color: "grey" }}>
              Connectly is a modern platform that bridges people and ideas through seamless digital interaction...
            </p>
            <div className="btn">
              <Button style={{ color: '#6366F1', border: "2px solid" }} href="https://github.com/Himanshu-00007/CONNECTLY">Code Base</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button style={{ color: '#6366F1', border: "2px solid" }} href="https://connectly-wc1l.onrender.com/">Live Preview</Button>
            </div>
          </div>
          {!isMobile && (
            <div className="ui">
              <img src="/image.png" alt="Connectly" />
            </div>
          )}
        </div>

        {/* Project 2 */}
        <div className="card">
          <div className="info">
            <h3 style={{ color: "#1111e69c", fontSize: "30px", marginBottom: 0 }}>HomeX</h3>
            <p style={{ lineHeight: "1.625", fontSize: "18px", fontWeight: '525' }}>
              Rental marketplace, connecting travelers with hosts...
            </p>
            <p style={{ lineHeight: "1.625", color: "grey" }}>
              Stay rental platform that links travelers with hosts offering distinctive homes and spaces...
            </p>
            <div className="btn">
              <Button style={{ color: '#6366F1', border: "2px solid" }} href="https://github.com/Himanshu-00007/HomeX">Code Base</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button style={{ color: '#6366F1', border: "2px solid" }} href="https://homex-1d2l.onrender.com">Live Preview</Button>
            </div>
          </div>
          {!isMobile && (
            <div className="ui">
              <img src="/homex.png" alt="HomeX" />
            </div>
          )}
        </div>

        {/* Project 3 */}
        <div className="card">
          <div className="info">
            <h3 style={{ color: "#1111e69c", fontSize: "30px", marginBottom: 0 }}>IntelliMate</h3>
            <p style={{ lineHeight: "1.625", fontSize: "18px", fontWeight: '525' }}>
              An intelligent chatbot that understands, assists...
            </p>
            <p style={{ lineHeight: "1.625", color: "grey" }}>
              Our chatbot is more than just a virtual assistant — it listens, understands...
            </p>
            <div className="btn">
              <Button style={{ color: '#6366F1', border: "2px solid" }} href="https://github.com/Himanshu-00007/IntelliMate">Code Base</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button style={{ color: '#6366F1', border: "2px solid" }} href="https://intellimate-dmzf.onrender.com/">Live Preview</Button>
            </div>
          </div>
          {!isMobile && (
            <div className="ui">
              <img src="/intellimate.png" alt="IntelliMate" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
