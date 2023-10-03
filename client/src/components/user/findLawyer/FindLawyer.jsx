import React, { useState } from 'react'
import styled from 'styled-components'
import LawyerListCard from './LawyerListCard'
import LawyerProfile from './LawyerProfile'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { DjangoUrl } from '../../../constants'
import findlawyerhero from '../../../assets/imgs/findlawyerhero2.svg'

const Hero = styled.div`
  width: 100%;
  height: 68vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7f3f8;
`
const HeroContent = styled.div`
  flex: 4;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0;
  span {
    width: 60%;
    margin-left: 18%;
  }
  .herotitle {
    font-weight: 900;
    font-size: 5rem;
    margin-top: 5%;
    background: linear-gradient(
      to right,
      #0d265c 10%,
      #0b98da 30%,
      #0b98da 70%,
      #0d265c 80%
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
  .tagline {
    font-weight: 700;
    font-size: 2.3rem;

    background: linear-gradient(
      to right,
      #0d265c 10%,
      #0b98da 30%,
      #0b98da 70%,
      #0d265c 80%
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
  .description {
    font-weight: 500;
    font-size: 1.2rem;
    margin-top: 5%;
    color: grey;
  }
`
const HeroImgContainer = styled.div`
  flex: 3;
  height: 100%;
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 0 0 0 50px;
`
const HeroImg = styled.div`
  width: 80%;
  height:80%;
  position: absolute;
  z-index: 4;
  display: flex;
  img {
    margin-top: 8%;
    margin-left: 1%;
    width: 110%;
    height: 100%;
    object-fit: cover;
  }
`
const Container = styled.div`
  width: 100%;
  height: 200vh;
  display: flex;
  background-color: #f6f8faff;
  align-items: center;
  flex-direction: column;
`
const SearchContainer = styled.div`
  width: 80%;
  height: 13%;
  background: rgb(13,38,92);
 background: linear-gradient(145deg, rgba(13,38,92,1) 32%, rgba(12,71,128,1) 64%, rgba(11,152,218,1) 100%);
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  margin-top: -4%;
  box-shadow: 0 0 10px hsl(0, 0%, 81%);
  z-index:2;
  h1 {
    font-weight: 700;
    font-size: 20px;
    margin-top:2%;
    margin-left: 2%;
    margin-bottom: 1.5%;
    color:white;
  }
`
const Search = styled.div`
  width: 100%;
  display: flex;

  &:focus {
    outline: none;
    border: 1px solid #0d265c;
  }
`
const Filter = styled.div`
  width: 80%;
  height: 7%;
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 20px;
  margin-top: 1%;
  div {
    width: 10%;
    height: 60%;
    font-weight: 600;
    border-radius: 20px;
    border: 1px solid #0d265c;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .sort {
    background-color: #e5f1fcff;
  }
`
const Lawyers = styled.div`
  width: 80%;
  height: 100%;
  background-color: #f6f8faff;
  display: flex;
  margin-top: 1%;
`
const LawyerList = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const LawyerProfileContainer = styled.div`
  width: 62%;
  height: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
`

const FindLawyer = () => {
  const [search, setSearch] = useState('')
  const [lawyer, setLawyer] = useState('')
  const [selectedLawyerData, setSelectedLawyerData] = useState(null)
  const handleChange = e => {
    setSearch(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const recommended = async () => {
      const response = await fetch(`${DjangoUrl}/recommend/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: search
        })
      })
      if (!response.ok) {
        console.log('error')
      } else {
        const data = await response.json()
        console.log(data)
        setLawyer(data)
      }
    }
    recommended()
  }
  return (
    <div>
      <Hero>
        <HeroContent>
          <span className='herotitle'>CONSULT</span>
          <span className='tagline'>Practitioners 1-ON-1 !</span>
          <span className='description'>
          "Connecting You with Legal Experts: Book Your Consultation Today !"
          </span>
        </HeroContent>
        <HeroImgContainer>
          <div class='relative w-full max-w-lg'>
            <div class='absolute top-5 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
            <div class='absolute top-4 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
            <div class='absolute top-60 left-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
            <div class='absolute top-40 left-60 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          </div>
          <HeroImg>
            <img src={findlawyerhero}></img>
          </HeroImg>
        </HeroImgContainer>
      </Hero>

      <Container>
        <SearchContainer>
          <h1>Type in your case details</h1>
          <Search>
            <TextField
              placeholder='Type in your case details'
              variant='outlined'
              style={{
                width: '80%',
                borderRadius: '10px',
                backgroundColor: 'white',
                marginLeft: '2%'
              }}
              onChange={handleChange}
            />
            <Button
              variant='contained'
              style={{
                width: '15%',
                height: '100%',
                fontWeight:'700',
                fontSize:'1rem',
                borderRadius: '0 20px 20px',
                backgroundColor: 'white',
                color: 'var(--primary-color)',
                marginLeft: '1%'
              }}
              onClick={handleSubmit}
            >
              Search
            </Button>
          </Search>
        </SearchContainer>
        <Filter>
          <div className='sort'>SortBy</div>
          <div>Category</div>
          <div>Location</div>
          <div>Price</div>
          <div>Experience</div>
        </Filter>
        <Lawyers>
          <LawyerList>
            {lawyer && lawyer.data ? (
              lawyer.data.map((lawyerData, index) => (
                <button onClick={() => setSelectedLawyerData(lawyerData)}>
                  <LawyerListCard
                    key={index}
                    lawyerData={lawyerData}
                    setSelectedLawyerData={setSelectedLawyerData}
                  />
                </button>
              ))
            ) : (
              <div>No lawyer data available.</div>
            )}
          </LawyerList>
          <LawyerProfileContainer>
            {selectedLawyerData ? (
              <LawyerProfile lawyerData={selectedLawyerData} />
            ) : (
              <div>No lawyer selected.</div>
            )}
          </LawyerProfileContainer>
        </Lawyers>
      </Container>
    </div>
  )
}

export default FindLawyer
