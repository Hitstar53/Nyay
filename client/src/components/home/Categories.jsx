import React from 'react'
import styled from 'styled-components'
import civil from '../../assets/imgs/civil-right.png'
import criminaldefence from '../../assets/imgs/criminal-defence.png'
import corporate from '../../assets/imgs/corporate.png'
import family from '../../assets/imgs/family.png'
import realestate from '../../assets/imgs/realestate.png'
import labour from '../../assets/imgs/labour.png'
import injury from '../../assets/imgs/injury.png'
import immigration from '../../assets/imgs/immigration.png'
import tex from '../../assets/imgs/tex.png'
import environmental from '../../assets/imgs/environmental.png'
import publicinterest from '../../assets/imgs/public.png'
import ip from '../../assets/imgs/ip.png'

const Wrapper = styled.div`
margin-top:2%;
display:flex;
flex-direction:column;
align-items:center;
`
const Title= styled.div`
  width:90%;
    font-weight:700;
    font-size:2rem;
    color:var(--primary-color);
    margin:1% ;
`
const CategoryContainer=styled.div`
width:80rem;
height:23rem;
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
border-radius:10px;
box-shadow: 0 0 10px  #e7f3f8;
${'' /* border:1px solid var(--secondary-color); */}
display:flex;
flex-direction:column;
align-items:center;
transition: all 0.4s ease;
&:hover{

  transform:scale(1.1);
}
 `
const CategoryCardImg=styled.img`
height:70%;
width:85%;
margin:5%;
`
const CategoryCardTitle=styled.div`
font-weight:600;
font-size:13px;
color:#0d265c;
margin-top:2%;
`
 

const Categories = () => {
  return (
    <Wrapper>
    <Title>Legal Categories</Title>
      <CategoryContainer>
           <CategoryCard>
           <CategoryCardImg src={civil}></CategoryCardImg>
           <CategoryCardTitle>Civil Litigation</CategoryCardTitle>
           </CategoryCard>

           <CategoryCard>
           <CategoryCardImg src={criminaldefence}></CategoryCardImg>
           <CategoryCardTitle>Criminal Defence</CategoryCardTitle>
           </CategoryCard>

           <CategoryCard>
           <CategoryCardImg src={corporate}></CategoryCardImg>
           <CategoryCardTitle>Corporate</CategoryCardTitle>
           </CategoryCard>

           <CategoryCard>
           <CategoryCardImg src={family}></CategoryCardImg>
           <CategoryCardTitle>Family</CategoryCardTitle>
           </CategoryCard>

           <CategoryCard>
           <CategoryCardImg src={realestate}></CategoryCardImg>
           <CategoryCardTitle>Real Estate</CategoryCardTitle>
           </CategoryCard>

           <CategoryCard>
           <CategoryCardImg src={immigration}></CategoryCardImg>
           <CategoryCardTitle>Immigration</CategoryCardTitle>
           </CategoryCard>

           <CategoryCard>
           <CategoryCardImg src={injury}></CategoryCardImg>
           <CategoryCardTitle>Personal Injury</CategoryCardTitle>
           </CategoryCard>

           <CategoryCard>
           <CategoryCardImg src={labour}></CategoryCardImg>
           <CategoryCardTitle> Labour</CategoryCardTitle>
           </CategoryCard>

           <CategoryCard>
           <CategoryCardImg src={ip}></CategoryCardImg>
           <CategoryCardTitle>IP / Patent </CategoryCardTitle>
           </CategoryCard>

           <CategoryCard>
           <CategoryCardImg src={tex}></CategoryCardImg>
           <CategoryCardTitle>Tax</CategoryCardTitle>
           </CategoryCard>
           
           <CategoryCard>
           <CategoryCardImg src={environmental}></CategoryCardImg>
           <CategoryCardTitle>Environmental</CategoryCardTitle>
           </CategoryCard>

           <CategoryCard>
           <CategoryCardImg src={publicinterest}></CategoryCardImg>
           <CategoryCardTitle>Public interest</CategoryCardTitle>
           </CategoryCard>
            
        
            
        </CategoryContainer>
        </Wrapper>
  )
}

export default Categories
