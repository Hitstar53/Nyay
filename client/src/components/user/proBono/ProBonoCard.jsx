import React from 'react'
import styled from 'styled-components'
import earthquake from '../../../assets/imgs/earthquake.jpg'

const ProBonoCardContainer = styled.div`
  width:28%;
  height:25rem;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  ${'' /* border: 2px solid var(--secondary-color); */}
  overflow: hidden;
  box-shadow: 0 0 20px hsl(0, 0%, 81%);
  background-color:white;
`
const ProBonoImg = styled.img`
  width: 100%;
  height: 45%;
  background-color: yellow;
`
const ProBonoDesc = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  padding: 7%;

  .location {
    font-weight: 800;
    font-size: 0.9rem;
    color: var(--secondary-color);
  }
  .title {
    font-weight: 700;
    font-size: 1rem;
    color: var(--primary-color);
  }
  .info {
    font-weight: 500;
    font-size: 0.9rem;
    margin-top: 3%;
    color: grey;
  }
  .bar {
    width: 100%;
    height: 3%;
    background-color: #d6eef9;
    margin-top: 5%;
    border-radius: 20px;
    overflow: hidden;
  }
  .filled {
    width: 80%;
    height: 100%;
    background-color: var(--secondary-color);
  }
  .raised {
    margin-top: 5%;
    font-weight: 500;
    font-size: 1rem;
    span {
      font-weight: 800;
      font-size: 1.1rem;
      color: var(--primary-color);
    }
  }
  `

const ProBonoCard = () => {
  return (
    <ProBonoCardContainer>
    <ProBonoImg src={earthquake} />
    <ProBonoDesc>
      <div className='location'>MUMBAI , MH</div>
      <div className='title'>Earthquake Disaster</div>
      <div className='info'>
        fasdfasdfs asdfadsf adsflaksjdf a;lsdfjas a;sldkfj als
        klfasjdfasldkf fas;df
      </div>
      <div className='bar'>
        <div className='filled'></div>
      </div>
      <div className='raised'>
        <span>$1000 raised of </span> $200000
      </div>
    </ProBonoDesc>
  </ProBonoCardContainer>
  )
}

export default ProBonoCard
