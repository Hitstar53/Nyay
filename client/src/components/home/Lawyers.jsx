import React from 'react'
import styled from 'styled-components'
import handcuffs from '../../assets/imgs/handcuffs.png'
import briefcase from '../../assets/imgs/briefcase.png'
import legaldocuments from '../../assets/imgs/legal-document.png'
import parents from '../../assets/imgs/parents.png'
import demonstration from '../../assets/imgs/demonstration.png'
import earth from "../../assets/imgs/earth.png"
import realestate from '../../assets/imgs/real-estate.png'
import immigration from '../../assets/imgs/migration.png'
import ip from '../../assets/imgs/ip-address.png'
import labor from '../../assets/imgs/labor-day.png'
import accident from '../../assets/imgs/accident.png'
import tax from '../../assets/imgs/tax.png'

const Container=styled.div`
height:95vh;
width:100%;
background-color:#0d265c;
z-index:2;
margin-top:-4%;
display:flex;
justify-content:center;
align-items:center;
`
const ToggleContent = styled.div `
   width:82%;
    height:60%;
    background-color:white;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
`
const CategoryContainer=styled.div`
flex:2;
height:80%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
column-gap:6%;
row-gap:7%;
`
const CategoryCard = styled.div`
width:10%;
height:40%;
background-color:#E3F1F8;
border-radius:10px;
border:1px solid #A5DBF4;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
transition: all 0.4s ease;
&:hover{
  box-shadow:2px 2px #A5DBF4;
  transform:scale(1.1);
}
`
const CategoryCardImg=styled.img`
height:55%;
width:60%;
`
const CategoryCardTitle=styled.div`
display:flex;
flex-directon:column;
justify-content:center;
margin-top:6%;
font-weight:600;
font-size:13px;
color:#0d265c;

`
 

const Lawyers = () => {
  return (
    <div>
      <Container>
        <ToggleContent>
        <CategoryContainer>
            <CategoryCard>
              <CategoryCardImg src={handcuffs}/>
              <CategoryCardTitle>Criminal Defense</CategoryCardTitle>
            </CategoryCard>
           
            <CategoryCard>
              <CategoryCardImg src={briefcase}/>
              <CategoryCardTitle>Corporate</CategoryCardTitle>
            </CategoryCard>
           
            <CategoryCard>
              <CategoryCardImg src={tax}/>
              <CategoryCardTitle>Bankrupcy / Tax</CategoryCardTitle>
            </CategoryCard>
           
            <CategoryCard>
              <CategoryCardImg src={legaldocuments}/>
              <CategoryCardTitle>Civil Litigation</CategoryCardTitle>
            </CategoryCard>
           
            <CategoryCard>
              <CategoryCardImg src={parents}/>
              <CategoryCardTitle>Family</CategoryCardTitle>
            </CategoryCard>
           
            <CategoryCard>
              <CategoryCardImg src={realestate}/>
              <CategoryCardTitle>Real Estate</CategoryCardTitle>
            </CategoryCard>
           
            <CategoryCard>
              <CategoryCardImg src={immigration}/>
              <CategoryCardTitle>Immigration</CategoryCardTitle>
            </CategoryCard>
           
            <CategoryCard>
              <CategoryCardImg src={ip}/>
              <CategoryCardTitle>IP / Patent</CategoryCardTitle>
            </CategoryCard>
           
            <CategoryCard>
              <CategoryCardImg src={demonstration}/>
              <CategoryCardTitle>Public interest</CategoryCardTitle>
            </CategoryCard>
           
            <CategoryCard>
              <CategoryCardImg src={labor}/>
              <CategoryCardTitle> Labour </CategoryCardTitle>
            </CategoryCard> 
           
            <CategoryCard>
              <CategoryCardImg src={accident}/>
              <CategoryCardTitle>Personal Injury</CategoryCardTitle>
            </CategoryCard>
             
            <CategoryCard>
              <CategoryCardImg src={earth}/>
              <CategoryCardTitle>Environmental</CategoryCardTitle>
            </CategoryCard>
           
            
        </CategoryContainer>


         
         
         
             
        </ToggleContent>
      </Container>
    </div>
  )
}

export default Lawyers
