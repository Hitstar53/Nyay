import React from 'react'
import styled from 'styled-components'
import publicimg from '../../../assets/imgs/public.png'
import ProBonoCard from './ProBonoCard'
import probonohero from '../../../assets/imgs/probonohero.svg'
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
    margin-top: 2%;
    color: grey;
  }
  button{
    width:20%;
    height:10%;
    margin:3% 18% ;
    border-radius:0 20px 20px;
    font-weight:700;
    font-size:1.2rem;
    background-color:var(--primary-color);
    color:white;
  }
`
const HeroImgContainer = styled.div`
  flex: 3;
  height: 100%;
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 0 0 0 50px;
`
const HeroImg = styled.div`
  width: 70%;
  height: 80%;
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
const ProBonoContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SearchContainer = styled.div`
  width: 80%;
  height: 15rem;
  background: rgb(13, 38, 92);
  background: linear-gradient(
    145deg,
    rgba(13, 38, 92, 1) 32%,
    rgba(12, 71, 128, 1) 64%,
    rgba(11, 152, 218, 1) 100%
  );
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  margin-top: -3%;
  box-shadow: 0 0 20px grey;
 
  z-index: 2;
  h1 {
    font-weight: 700;
    font-size: 20px;
    margin-top: 1%;
    margin-left: 2%;
    color: white;
  }
`
const Categories = styled.div`
  width: 100%;
  height: 75%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  &:focus {
    outline: none;
    border: 1px solid #0d265c;
  }
`
const CategoryCard = styled.div`
  width: 10%;
  height: 80%;
  border-radius: 10px;
  background-color:white;
  box-shadow: 0 0 10px #e7f3f8;
  ${'' /* border:1px solid var(--secondary-color); */}
  display:flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
`
const CategoryCardImg = styled.img`
  height: 70%;
  width: 85%;
  margin: 5%;
`
const CategoryCardTitle = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: #0d265c;
  margin-top: 2%;
`
const ProBonoCardContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 3%;
  display: flex;
  flex-direction:column;
  align-items: center;
  h1{
    width:85%;
    font-weight:700;
    font-size:1.7rem;
    margin:3%;
    color:var(--primary-color);
  }
  .wrap {
    height: auto;
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    ${'' /* justify-content: space-between; */}
    column-gap: 8%;
    row-gap: 2rem;
  }
`

const ProBono = () => {
  return (
    <div>
      <Hero>
        <HeroContent>
          <span className='herotitle'>Pro-Bono</span>
          <span className='tagline'>Legal Aid - Done Right</span>
          <span className='description'>
            Help others by donating to their cause , or Apply for Pro-Bono Status for your own case !
          </span>
          <button>Apply</button>
        </HeroContent>
        <HeroImgContainer>
          <div class='relative w-full max-w-lg'>
            <div class='absolute top-5 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
            <div class='absolute top-4 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
            <div class='absolute top-60 left-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
            <div class='absolute top-40 left-60 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          </div>
          <HeroImg><img src={probonohero}></img></HeroImg>
        </HeroImgContainer>
      </Hero>

      <ProBonoContent>
        <SearchContainer>
          <h1>Search by category</h1>

          <Categories>
            <CategoryCard>
              <CategoryCardImg src={publicimg}></CategoryCardImg>
              <CategoryCardTitle>Civil Litigation</CategoryCardTitle>
            </CategoryCard>
            <CategoryCard>
              <CategoryCardImg src={publicimg}></CategoryCardImg>
              <CategoryCardTitle>Civil Litigation</CategoryCardTitle>
            </CategoryCard>
            <CategoryCard>
              <CategoryCardImg src={publicimg}></CategoryCardImg>
              <CategoryCardTitle>Civil Litigation</CategoryCardTitle>
            </CategoryCard>
            <CategoryCard>
              <CategoryCardImg src={publicimg}></CategoryCardImg>
              <CategoryCardTitle>Civil Litigation</CategoryCardTitle>
            </CategoryCard>
            <CategoryCard>
              <CategoryCardImg src={publicimg}></CategoryCardImg>
              <CategoryCardTitle>Civil Litigation</CategoryCardTitle>
            </CategoryCard>
            <CategoryCard>
              <CategoryCardImg src={publicimg}></CategoryCardImg>
              <CategoryCardTitle>Civil Litigation</CategoryCardTitle>
            </CategoryCard>
           
          </Categories>
        </SearchContainer>

       
        <ProBonoCardContainer>
        <h1>Discover Pro-Bono Cases:</h1>
          <div className='wrap'>
            <ProBonoCard />
            <ProBonoCard />
            <ProBonoCard />
            <ProBonoCard />
            <ProBonoCard />
            <ProBonoCard />
            <ProBonoCard />
            <ProBonoCard />
            <ProBonoCard />
          </div>
        </ProBonoCardContainer>
      </ProBonoContent>
    </div>
  )
}

export default ProBono
