import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Categories from './Categories'
import ServiceDescription from './ServiceDescription'
import Probono from './Probono'
import Review from './Review'

import styled from 'styled-components'



const HomeContent = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
background-color:white;
`

const Home = () => {
  return (
    <div>
      <Hero />
     <HomeContent>
       <Categories/>
        <Services/>
        <ServiceDescription/>
        <Probono/>
        <Review/>
     </HomeContent>
    
     
      
      </div>
  
  )
}

export default Home
