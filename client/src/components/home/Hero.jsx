import React from "react";
import styles from "./Hero.module.css";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PaidIcon from '@mui/icons-material/Paid';
import GavelIcon from '@mui/icons-material/Gavel';
import PlaceIcon from '@mui/icons-material/Place';
import styled from "styled-components";

const Wrapper=styled.div`
width:100%;
height:70vh;
display:flex;
justify-content:center;
align-items:center;
background-color:#e9f1f5;

`
const HeroContent=styled.div`
flex:3;
height:80%;
z-index:2;
display:flex;
flex-direction:column;
padding: 0 0;
span{
  width:60%;
  margin-left:20%;
}
.herotitle{
  font-weight:900;
  font-size:5rem;
  background: linear-gradient(
        to right,
        #0D265C 10%,
        #0B98DA 30%,
        #0B98DA 70%,
        #0D265C 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-size: 300% auto;
    animation: textShine 5s ease-in-out infinite alternate;
    @keyframes textShine {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}
}
.tagline{
  font-weight:700;
  font-size:2.3rem;
  
  background: linear-gradient(
        to right,
        #0D265C 10%,
        #0B98DA 30%,
        #0B98DA 70%,
        #0D265C 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-size: 300% auto;
    animation: textShine 5s ease-in-out infinite alternate;
    @keyframes textShine {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}
}
.description{
  font-weight:600;
  font-size:1rem;
  margin-top:1%;
  color:grey;
}
`
const Tab = styled.div`
width:100%;
height:40%;
background-color:white;
margin:6% 20% 0 ;
z-index:3;
border-radius:0 20px 20px;
display:flex;
flex-direction:column;
align-items:center;
box-shadow: 0 0 10px  hsl(0, 0%, 81%);

`
const TopContainer=styled.div`
width:95%;
height:25%;
margin-top:1.5%;
display:flex;
align-items:center;
.title{
  font-weight:700;
  font-size:1.2rem;
  color:var(--primary-color);
}
.process{
  font-weight:500;
  font-size:0.85rem;
  margin-left:0.5%;
  color:grey;
}
button{
  margin-left:auto;
  border:2px solid var(--primary-color);
  background-color:var(--primary-color);
  color:white;
  border-radius:0 15px 15px;
  height:100%;
  width:10%;
  font-weight:600;
}
`
const BottomContainer=styled.div`
width:95%;
height:40%;
margin-top:2%;
display:flex;
justify-content:space-between;
`
const BottomElement=styled.div`
height:100%;
width:30%;
border-radius:10px;
border:2px solid  var(--secondary-color);
display:flex;
align-items:center;
`
const BottomeElementContent=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:60%;
height:100%;
margin-left:3%;
.title{

  font-size:0.8rem;
  font-weight:500;
  color:grey;
}
.info{

  font-weight:700;
  font-size:0.9rem;
}
`
const HeroImg=styled.div`
flex:2 ;
height:100%;
background-color:yellow;
z-index:1;
`
const Hero = () => {
  return (
    <Wrapper>
    <HeroContent>
      <span className="herotitle">JUSTICE</span>
      <span className="tagline">Now served at Home !</span>
      <span className="description">" Find your Legal Practitioners from the comfort of your Home " </span>
      <Tab>
      <TopContainer>
        <div className="title">Book Appointment</div>
        <PersonSearchIcon className="icon" sx={{marginLeft:'10%',color:'grey'}}></PersonSearchIcon>
        <div className="process">Find Lawyers</div>

        <WatchLaterIcon sx={{marginLeft:'4%',color:'grey'}}></WatchLaterIcon>
        <div className="process">Choose Date & Time</div>

        <PaidIcon sx={{marginLeft:'4%',color:'grey'}}></PaidIcon>
        <div className="process">Pay</div>
        <button>Explore</button>
      </TopContainer>

      <BottomContainer>
        <BottomElement> 
           <GavelIcon sx={{fontSize:'2rem',margin:'8%',color:'var(--primary-color)'}}></GavelIcon>
            <BottomeElementContent>
              <div className="title">Category</div>
              <div className="info">Civil Litigation</div>
            </BottomeElementContent>
        </BottomElement>

        <BottomElement> 
           <PlaceIcon sx={{fontSize:'2rem',margin:'8%',color:'var(--primary-color)'}}></PlaceIcon>
            <BottomeElementContent>
              <div className="title">Location</div>
              <div className="info">Mumbai , MH</div>
            </BottomeElementContent>
        </BottomElement>
        <BottomElement> 
           <GavelIcon sx={{fontSize:'2rem',margin:'8%',color:'var(--primary-color)'}}></GavelIcon>
            <BottomeElementContent>
              <div className="title">Category</div>
              <div className="info">Civil Litigation</div>
            </BottomeElementContent>
        </BottomElement>
        
      </BottomContainer>
      </Tab>
    </HeroContent>
    <HeroImg></HeroImg>
    </Wrapper>
 
  );
};

export default Hero;
