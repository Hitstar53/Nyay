import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width:80%;
margin-top:4%;
height:24rem;
display:flex;
flex-direction:column;
align-items:center;
`
const LableHolder = styled.div`
width:100%;
height:85%;
display:flex;
flex-direction:column;
align-items:center;
background-color:var(--primary-color);
border-radius:10px;
`
const LableContent = styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:3%;

.title{
  font-weight:700;
  font-size:2.3rem;
  margin-left:4%;
  color:white;
}
button{
  height:90%;
  width:13%;
  background-color:white;
  margin-right:5%;
  border-radius:0 20px 20px;
  font-weight:600;
  font-size:1.1rem;
  color:
}
`
const ServicesCardHolder = styled.div`
width:90%;
height:80%;
margin-top:-11%;
display:flex;
border-radius:10px;
justify-content:space-between;
`
const ServicesCard = styled.div`
width:23%;
height:15.5rem;
display:flex;
flex-direction:column;
border-radius:0 20px 20px;
border:1px solid var(--secondary-color);
background-color:white;
padding:30px;
box-shadow: 0 0 10px  hsl(0, 0%, 81%);

`
const ServiceIcon=styled.img`
width:30%;
height:30%;
background-color:yellow;
`
const ServiceTitle=styled.div`
margin:8% 0 ;
font-weight:500;
font-size:1.25rem;
`
const ServiceDesc=styled.div`
margin:1% 0 ;
font-weight:500;
font-size:0.9rem;
color:grey;
`

const Services = () => {
  return (
    <Wrapper>
    <LableHolder>
    <LableContent>
      <span className='title'>Not just a Booking Website !</span>
      <button>Explore</button>
    </LableContent>

    </LableHolder>
    <ServicesCardHolder>
    <ServicesCard>
      <ServiceIcon/>
      <ServiceTitle>Find Practitioners</ServiceTitle>
      <ServiceDesc>Find Practitioners based on Your Legal Problem and Location</ServiceDesc>
    </ServicesCard>

    <ServicesCard>
      <ServiceIcon/>
      <ServiceTitle>Find Practitioners</ServiceTitle>
      <ServiceDesc>Find Practitioners based on Your Legal Problem and Location</ServiceDesc>
    </ServicesCard>
    <ServicesCard>

      <ServiceIcon/>
      <ServiceTitle>Find Practitioners</ServiceTitle>
      <ServiceDesc>Find Practitioners based on Your Legal Problem and Location</ServiceDesc>
    </ServicesCard>
    <ServicesCard>
    
      <ServiceIcon/>
      <ServiceTitle>Find Practitioners</ServiceTitle>
      <ServiceDesc>Find Practitioners based on Your Legal Problem and Location</ServiceDesc>
    </ServicesCard>

  
    </ServicesCardHolder>
   

      
    </Wrapper>
  )
}

export default Services