import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components'
import profile from '../../assets/imgs/profile.jpg'

const Wrapper = styled.div`
width:80%;
height:25rem;
margin-top:5%;
`
const Title =styled.div`
text-align:center;
font-size:2rem;
font-weight:700;
color:var(--primary-color);
`
const ReviewWrapper =styled.div`
width:100%;
height:20rem;
display:flex;
align-items:center;
justify-content:space-between;
`

const ReviewCard =styled.div`
width:22%;
height:80%;
border-radius:20px;
display:flex;
flex-direction:column;
padding:2%;
box-shadow: 0 0 8px  hsl(0, 0%, 81%);
`
const StarWrapper =styled.div`
width:80%;
display:flex;
`
const ReviewContent =styled.div`
margin-top:5%;
font-size:0.9rem;
font-weight:500;
color:grey;
`
const ReviewerWrapper =styled.div`
margin-top:auto;
width:100%;
height:20%;
display:flex;
`
const ReviewerImg=styled.img`
width:20%;
height:100%;
background-color:yellow;
border-radius:30px;
`
const ReviewerInfo =styled.div`
display:flex;
flex-direction:column;
margin-left:5%;
.name{
    font-weight:700;
    font-size:1rem;
    color:var(--primary-color);
}
.location{
    font-weight:500;
    font-size:0.8rem;
    color:var(--secondary-color);
}
`
const Review = () => {
  return (
    <Wrapper>
    <Title>What our Client's say</Title>
        <ReviewWrapper>
   
        <ReviewCard>
        <StarWrapper>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
   
        </StarWrapper>
        <ReviewContent>
        " jdjfas aflksdjfa kajdsfl jalkdsjfk lkadjsfkls  lajskdf  aldjfasl;d 
        sdlfkjas;dfas laskjdf;asd "  
        </ReviewContent>
        <ReviewerWrapper>
            <ReviewerImg src={profile}></ReviewerImg>
            <ReviewerInfo>
                <div className='name'>Yash Sonawane</div>
                <div className='location'>MUMBAI , MH</div>
            </ReviewerInfo>
        </ReviewerWrapper>
    </ReviewCard>

    <ReviewCard>
        <StarWrapper>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        </StarWrapper>
        <ReviewContent>
        " jdjfas aflksdjfa kajdsfl jalkdsjfk lkadjsfkls  lajskdf  aldjfasl;d 
        sdlfkjas;dfas laskjdf;asd "  
        </ReviewContent>
        <ReviewerWrapper>
        <ReviewerImg src={profile}></ReviewerImg>
            <ReviewerInfo>
                <div className='name'>Yash Sonawane</div>
                <div className='location'>MUMBAI , MH</div>
            </ReviewerInfo>
        </ReviewerWrapper>
    </ReviewCard>

    <ReviewCard>
        <StarWrapper>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        </StarWrapper>
        <ReviewContent>
        " jdjfas aflksdjfa kajdsfl jalkdsjfk lkadjsfkls  lajskdf  aldjfasl;d 
        sdlfkjas;dfas laskjdf;asd "  
        </ReviewContent>
        <ReviewerWrapper>
        <ReviewerImg src={profile}></ReviewerImg>
            <ReviewerInfo>
                <div className='name'>Yash Sonawane</div>
                <div className='location'>MUMBAI , MH</div>
            </ReviewerInfo>
        </ReviewerWrapper>
    </ReviewCard>

    <ReviewCard>
        <StarWrapper>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        <StarIcon sx={{color:'var(--star-color)'}}/>
        </StarWrapper>
        <ReviewContent>
        " jdjfas aflksdjfa kajdsfl jalkdsjfk lkadjsfkls  lajskdf  aldjfasl;d 
        sdlfkjas;dfas laskjdf;asd "  
        </ReviewContent>
        <ReviewerWrapper>
        <ReviewerImg src={profile}></ReviewerImg>
            <ReviewerInfo>
                <div className='name'>Yash Sonawane</div>
                <div className='location'>MUMBAI , MH</div>
            </ReviewerInfo>
        </ReviewerWrapper>
    </ReviewCard>
    
   </ReviewWrapper>
   </Wrapper>
  )
}

export default Review
