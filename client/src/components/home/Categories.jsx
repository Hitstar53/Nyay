import React from 'react'
import styled from 'styled-components'

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
${'' /* background-color:#E3F1F8; */}
border-radius:10px;
border:1px solid #A5DBF4;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
transition: all 0.4s ease;
&:hover{

  transform:scale(1.1);
}
 `
// const CategoryCardImg=styled.img`
// height:55%;
// width:60%;
// `
// const CategoryCardTitle=styled.div`
// display:flex;
// flex-directon:column;
// justify-content:center;
// margin-top:6%;
// font-weight:600;
// font-size:13px;
// color:#0d265c;

// `
 

const Categories = () => {
  return (
    <Wrapper>
    <Title>Legal Categories</Title>
      <CategoryContainer>
           <CategoryCard>

           </CategoryCard>
            
           <CategoryCard>

           </CategoryCard>
            
           <CategoryCard>

           </CategoryCard>
            
           <CategoryCard>

           </CategoryCard>
            
           <CategoryCard>

           </CategoryCard>
            
           <CategoryCard>

           </CategoryCard>
            
           <CategoryCard>

           </CategoryCard>
            
           <CategoryCard>

           </CategoryCard>
            
           <CategoryCard>

           </CategoryCard>
            
           <CategoryCard>

           </CategoryCard>
            
           <CategoryCard>

           </CategoryCard>
            
           <CategoryCard>

           </CategoryCard>
            
        </CategoryContainer>
        </Wrapper>
  )
}

export default Categories
