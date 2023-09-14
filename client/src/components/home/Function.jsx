import React from 'react'
import { styled } from 'styled-components'
import lawyer from '../../assets/imgs/lawyer.png'
import videocall from '../../assets/imgs/video-call.png'
import search from '../../assets/imgs/searching.png'
import donation from '../../assets/imgs/donation.png'
import retirement from '../../assets/imgs/retirement.png'

const Container = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
`
const Funcontainer = styled.div`
  width: 83%;
  height: 33vh;
  display: flex;
  justify-content: space-around;
  margin: 3%;
`
const FuncCard = styled.div`
  width: 16%;
  height: 100%;
  border: 3px solid #0d265c;
  color: white;
  ${'' /* border-radius: 20px; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-shadow: -5px 5px white;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 7px 7px #0b98da;
    border: 3px solid #0b98da;
  }
  z-index: 3;
`

const FuncImage = styled.div`
  width: 60%;
  height: 50%;
  margin-top: 10%;
`
const FuncImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const FuncDesc = styled.div`
  display: flex;
  padding: 10%;
  text-align: center;

  span {
    font-weight: 600;
    font-size: 20px;
  }
`

const Function = () => {
  return (
    <Container>
      <Funcontainer>
        <FuncCard>
          <FuncImage>
            <FuncImg src={lawyer} />
          </FuncImage>
          <FuncDesc>
            <span>Find Lawyers near You</span>
          </FuncDesc>
        </FuncCard>

        <FuncCard>
          <FuncImage>
            <FuncImg src={videocall} />
          </FuncImage>

          <FuncDesc>
            <span>Book a Video Consultation</span>
          </FuncDesc>
        </FuncCard>

        <FuncCard>
          <FuncImage>
            <FuncImg src={search} />
          </FuncImage>
          <FuncDesc>
            <span>Translate your Documents</span>
          </FuncDesc>
        </FuncCard>

        <FuncCard>
          <FuncImage>
            <FuncImg src={donation} />
          </FuncImage>
          <FuncDesc>
            <span> Pro-Bono Cases</span>
          </FuncDesc>
        </FuncCard>

        <FuncCard>
          <FuncImage>
            <FuncImg src={retirement} />
          </FuncImage>
          <FuncDesc>
            <span>Retired judges near you</span>
          </FuncDesc>
        </FuncCard>
      </Funcontainer>
    </Container>
  )
}

export default Function
