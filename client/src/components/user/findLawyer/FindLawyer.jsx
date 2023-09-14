import React from 'react'
import styled from 'styled-components'
import LawyerListCard from './LawyerListCard'
import LawyerProfile from './LawyerProfile'

const Hero = styled.div`
width:100%;
height:60vh;
background-color:blue;
`
const Container=styled.div`
width:100%;
height:160vh;
display:flex;
background-color:#f6f8faff;
align-items:center;
flex-direction:column;
`
const SearchContainer=styled.div`
    width:80%;
    height:25%;
    background-color:#e5f1fcff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    h1{
        font-weight:500;
        font-size:17px;
    } 
`
const Search = styled.textarea`
    resize:none;
    margin:1% 0;
    border:none;
    border-radius:10px;
    width:70%;
    &:focus{
        outline:none;
        border:1px solid #0d265c;
    }
`
const Filter = styled.div`
width:80%;
height:7%;
display:flex;
align-items:center;
font-size:13px;
gap:20px;
div{
    width:10%;
    height:70%;
    font-weight:600;
    border-radius:20px;
    border:1px solid  #0d265c;
    display:flex;
    justify-content:center;
    align-items:center;
}
.sort{
    background-color:#e5f1fcff;
}
`
const Lawyers = styled.div`
   width:80%;
   height:100%;
  background-color:#f6f8faff;
   display:flex;
   margin-top:1%;
`
const LawyerList = styled.div`
width:40%;
height:100%;
display:flex;
align-items:center;
flex-direction:column;
`

const LawyerProfileContainer = styled.div`
width:62%;
height:100%;
display:flex;

flex-direction:column;
align-items:center;
`


const FindLawyer = () => {
  return (
    <div>
    <Hero/>
    <Container>
        <SearchContainer>
            <h1>Type in your Case details</h1>
            <Search rows="7">
            </Search>
        </SearchContainer>

        <Filter>
            <div className='sort'>SortBy</div>
            <div >Category</div>
            <div >Location</div>
            <div>Price</div>
            <div>Experience</div>
        </Filter>

        <Lawyers>
            <LawyerList>
            <LawyerListCard/>
            </LawyerList>


            <LawyerProfileContainer>
                <LawyerProfile>
                </LawyerProfile>
            </LawyerProfileContainer>
        </Lawyers>
    </Container>
    </div>
  )
}

export default FindLawyer
