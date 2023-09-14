import React from 'react'
import styled from 'styled-components'
import heroImg from '../../assets/imgs/hero.jpg'

const HeroWrap = styled.div`
width:100%;
height:60vh;
display:flex;
justify-content:center;
align-items:center;
`
const HeroSection = styled.div`
width:80%;
height:90%;
border:3px solid #457DA1;
border-radius:20px;
overflow:hidden;
display:flex;
background-color:white;
justify-content:center;
align-items:center;
box-shadow:11px 11px #0d265c;
`
const HeroContent = styled.div`
flex:1.5;
height:80%;
display:flex;
flex-direction:column;
justify:content:center;
padding-left:40px;

h1{
    margin-top:3%;
    font-weight:900;
    font-size:65px;
}
p{
    font-weight:800;
    font-size:40px;
}
span{
    margin-top:2%;
    font-weight:600;
    font-size:30px;
}
button{
    margin-top:4%;
    height:18%;
    width:50%;
    font-weight:600;
    font-size:20px;
    border:none;
    color:white;
    background-color:#0B98DA;
    border-radius:20px;
    
    &:hover{
        background-color:#0d265c;
    }

}
`
const HeroImg = styled.img`
flex:1;
height:100%;
object-fit:cover;

`

const Hero = () => {
  return (
    <div>
    <HeroWrap>
        <HeroSection>
            <HeroContent>
                <h1>Justice ! </h1>
                <p>Now Served at Home</p>
                <span>"Secure your legal future effortlessly."</span>
                <button>Sign Up</button>
            </HeroContent>
            <HeroImg src={heroImg}/>
        </HeroSection>
    </HeroWrap>
    </div>
  )
}

export default Hero
