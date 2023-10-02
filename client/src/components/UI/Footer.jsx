import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GavelSharpIcon from '@mui/icons-material/GavelSharp';
// import logo from '../images/logo.png'

const Container=styled.div`
width:100%;
height:40vh;
display:flex;
justify-content:center;
align-items:center;
gap:10%;
margin-top:7%;
border-top:2px solid #0d265c;
`
const LogoContainer=styled.div`
width:30%;
height:80%;

display:flex;
flex-direction:column;
`
const Logo =styled.div`
 height:45%;
 width:100%;
 display:flex;
align-items:center;
color:#0d265c;

div{
  font-weight:900;
  font-size:40px; 
  margin-left:4%;
}
`
const LogoImg=styled.img`
width:17%;
height:65%;
background-color:red;
object-fit :cover;
`
const Links = styled.div`
width:100%;
height:30%;
display:flex;
gap:5.5%;
margin-top:3%;
`
const LinksContainer=styled.div`
width:20%;
height:80%;
background-color:white;
display:flex;
flex-direction:column;
justify-content:space-around;
font-size:15px;
font-weight:400;

.title{
  font-size:17px;
  font-weight:700;
  color:#0d265c;
}
`

const Footer = () => {
  return (
    <div>
      <Container>
        <LogoContainer>
          <Logo>
            <GavelSharpIcon
              sx={{ 
                display: { xs: "none", md: "flex" }, 
                mr: 1,
                fontSize: 40,
              }}
            />
            <div>NYAY</div>
          </Logo>
          <Links>
            <FacebookIcon sx={{ fontSize: 40, color: "#0d265c" }} />
            <InstagramIcon sx={{ fontSize: 40, color: "#0d265c" }} />
            <TwitterIcon sx={{ fontSize: 40, color: "#0d265c" }} />
            <LinkedInIcon sx={{ fontSize: 40, color: "#0d265c" }} />
          </Links>
        </LogoContainer>

        <LinksContainer>
          <div className="title">For Users</div>
          <div>Home</div>
          <div>About</div>
          <div>Contact Us</div>
          <div>Customer Support</div>
          <div>Privacy Policy</div>
        </LinksContainer>

        <LinksContainer>
          <div className="title">For Law Practitioner</div>
          <div>About</div>
          <div>Blog</div>
          <div>Contact Us</div>
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
        </LinksContainer>
      </Container>
    </div>
  );
}

export default Footer
