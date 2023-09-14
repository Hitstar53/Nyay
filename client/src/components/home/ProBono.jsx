import React from 'react'
import styled from 'styled-components'
import stepper from '../../assets/imgs/stepper.png'
import earthquake from '../../assets/imgs/earthquake.jpg'

const Container =styled.div`
width:100%;
height:90vh;
padding-top:3%;
display:flex;
margin-top:6%;
${'' /* background-color:green; */}
`
const Stepper=styled.div`
flex:1;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`
const StepperHolder=styled.div`
width:20%;
height:80%;
display:flex;
justify-content:center;
align-items:center;
`
const StepperImg=styled.img`
    height:100%; 
`
const StepperContent =styled.div`
width:60%;
height:80%;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const StepperContentScript =styled.div`
width:100%;
height:12%;
display:flex;
flex-direction:column;
justify-content:center;
background-color:white;

.title{
    font-size:30px;
    font-weight:900;
}
.desc{
    font-size:20px;
    font-weight:500;
}
`
const Testimonials=styled.div`
flex:1;
display:flex;
justify-content:space-around;
`
const TestimonialCol=styled.div`
height:100%;
width:45%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:6%;
`
const TestimonialCol2=styled.div`
height:100%;
width:45%;

display:flex;
flex-direction:column;
justify-content:space-between;
gap:6%;
`
const TestimonialCard = styled.div`
width:100%;
height:45%;
border-radius:10px;
background-color:#A5DBF4;
border:1px solid #0B98DA;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center; 

transition: all 0.4s ease;
&:hover{
    transform: scale(1.05);
    box-shadow:4px 4px #0B98DA;
}
`
const TestimonialCardImgContainer = styled.div`
width:80%;
height:55%;
object-fit:cover;
background-color:white;
display:flex;
justify-content:center;
align-items:center;

`
const TestimonialCardImg = styled.img`
width:85%;
height:85%;
object-fit:cover;

`
const TestimonialCardMoney = styled.div`
width:80%;
height:30%;
background-color:white;
display:flex;
flex-direction:column;

.raisedbar{
    width:90%;
    height:4%;
    background-color:hsl(0, 0%, 76%);
    border-radius:20px;
    margin:4%;
}
.filled{
    width:70%;
    height:100%;
    background-color:green;
    border-radius:20px;
   
}
.money{
    margin:4%;
    font-weight:400;
    font-size:15px;
    span{
        font-weight:600;
        font-size:20px;
    }
}

`


const ProBono = () => {
  return (
    <Container>
        <Stepper>
            <StepperHolder><StepperImg src={stepper}/></StepperHolder>
            <StepperContent>
                <StepperContentScript>
                    <div className='title'>Apply for Pro-Bono status</div>
                    <div className='desc'>Fill out case details and files.</div>
                </StepperContentScript>

                <StepperContentScript>
                    <div className='title'>Case authorization </div>
                    <div className='desc'>Tests to check validity of case.</div>
                </StepperContentScript>

                <StepperContentScript>
                    <div className='title'>Enable Crowd-funding</div>
                    <div className='desc'>Post authorization of case.</div>
                </StepperContentScript>
                
            </StepperContent>
        </Stepper>
        <Testimonials>
            <TestimonialCol>
                <TestimonialCard>
                    <TestimonialCardImgContainer>
                        <TestimonialCardImg src={earthquake}/>
                    </TestimonialCardImgContainer>
                    <TestimonialCardMoney>
                        <div className='raisedbar'><div className='filled'></div></div>
                        <div className='money'><span>$5,000 raised</span> out $10,000</div>
                    </TestimonialCardMoney>
                </TestimonialCard>
            </TestimonialCol>

            <TestimonialCol2>
            <TestimonialCard>
                    <TestimonialCardImgContainer>
                        <TestimonialCardImg src={earthquake}/>
                    </TestimonialCardImgContainer>
                    <TestimonialCardMoney>
                        <div className='raisedbar'><div className='filled'></div></div>
                        <div className='money'><span>$5,000 raised</span> out $10,000</div>
                    </TestimonialCardMoney>
                </TestimonialCard>
                <TestimonialCard>
                    <TestimonialCardImgContainer>
                        <TestimonialCardImg src={earthquake}/>
                    </TestimonialCardImgContainer>
                    <TestimonialCardMoney>
                        <div className='raisedbar'><div className='filled'></div></div>
                        <div className='money'><span>$5,000 raised</span> out $10,000</div>
                    </TestimonialCardMoney>
                </TestimonialCard>
                
            </TestimonialCol2>
             
        </Testimonials>
    </Container>
  )
}

export default ProBono
