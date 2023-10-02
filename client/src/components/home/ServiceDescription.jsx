import React from 'react'
import styled from 'styled-components'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp'
import findlawyer from '../../assets/imgs/findlawyer.png'
import translate from '../../assets/imgs/translate.png'
import legalaid from '../../assets/imgs/legalaid.png'
import retired from '../../assets/imgs/retired.png'
const Wrapper = styled.div`
  width: 80%;
  height: auto;
  margin-top: 6%;
  display: flex;
  flex-direction: column;
  just-content: space-around;
`
const ServiceWrapper = styled.div`
  width: 100%;
  height: 23rem;
  background-color: white;
  display: flex;
  margin-bottom: 7%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`
const ServiceImg = styled.div`
  flex: 2;
  height: 100%;
  position:relative;
  background-color:white;
  display:flex;
  justify-content:center;
 
  img{
    margin-top:8%;
    position:absolute;
    width:77%;
    height:85%;
    object-fit:cover;
  }
`
const ServiceDesc = styled.div`
  flex: 4;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ServiceTitle = styled.div`
  width: 90%;
  font-weight: 500;
  font-size: 0.8rem;
  color: var(--secondary-color);
`
const ServiceTitleDesc = styled.div`
  width: 90%;
  font-weight: 800;
  font-size: 2.3rem;
  color: var(--primary-color);
`
const ServiceInfo = styled.div`
  width: 90%;
  padding-right: 8%;
  font-weight: 400;
  font-size: 1.05rem;
  margin: 1.3% 0 1%;
  color: grey;
`
const ServiceInfoPointers = styled.div`
  width: 90%;
  font-weight: 600;
  font-size: 0.9rem;
`
const Button = styled.button`
  align-self: flex-start;
  width: 7rem;
  height: 13%;
  margin: 3% 5% 0;
  border: 2px solid var(--primary-color);
  background-color: var(--primary-color);
  color: white;
  border-radius: 0 20px 20px;
  font-weight: 700;
  font-size: 1.1rem;
`

const ServiceDescription = () => {
  return (
    <Wrapper>
      <ServiceWrapper>
        <ServiceImg>
          <div class='relative w-full max-w-lg'>
            <div class='absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
            <div class='absolute top-60 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          </div>
          <img src={findlawyer}></img>
        </ServiceImg>
        <ServiceDesc>
          <ServiceTitle>FIND LAWYER</ServiceTitle>
          <ServiceTitleDesc>
            Hello asldkflasdfas;lf asldfkjasd a;lsdfj;lasd l;ajsdfds{' '}
          </ServiceTitleDesc>
          <ServiceInfo>
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
          </ServiceInfo>

          <ServiceInfoPointers>
            <CheckCircleSharpIcon
              sx={{
                margin: '1%',
                fontSize: '1.3rem',
                color: 'var(--secondary-color)'
              }}
            />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
          </ServiceInfoPointers>
          <ServiceInfoPointers>
            <CheckCircleSharpIcon
              sx={{
                margin: '1%',
                fontSize: '1.3rem',
                color: 'var(--secondary-color)'
              }}
            />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
          </ServiceInfoPointers>

          <Button>Explore</Button>
        </ServiceDesc>
      </ServiceWrapper>

      <ServiceWrapper>
        <ServiceDesc>
          <ServiceTitle>FIND LAWYER</ServiceTitle>
          <ServiceTitleDesc>
            Hello ASDJFKLASJDF KLAJDSF;LASD A;LDKJF{' '}
          </ServiceTitleDesc>
          <ServiceInfo>
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
          </ServiceInfo>

          <ServiceInfoPointers>
            <CheckCircleSharpIcon
              sx={{
                margin: '1%',
                fontSize: '1.3rem',
                color: 'var(--secondary-color)'
              }}
            />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
          </ServiceInfoPointers>
          <ServiceInfoPointers>
            <CheckCircleSharpIcon
              sx={{
                margin: '1%',
                fontSize: '1.3rem',
                color: 'var(--secondary-color)'
              }}
            />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
          </ServiceInfoPointers>

          <Button>Explore</Button>
        </ServiceDesc>
        <ServiceImg>
        <div class='relative w-full max-w-lg'>
            <div class='absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
            <div class='absolute top-60 right-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          </div>
          <img src={translate}></img>
        </ServiceImg>
      </ServiceWrapper>

      <ServiceWrapper>
      <ServiceImg>
      <div class='relative w-full max-w-lg'>
            <div class='absolute top-8 right-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
            <div class='absolute top-60 left-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          </div>
          <img src={legalaid}/>
        </ServiceImg>
        <ServiceDesc>
          <ServiceTitle>FIND LAWYER</ServiceTitle>
          <ServiceTitleDesc>
            Hello ASDJFKLASJDF KLAJDSF;LASD A;LDKJF{' '}
          </ServiceTitleDesc>
          <ServiceInfo>
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
          </ServiceInfo>

          <ServiceInfoPointers>
            <CheckCircleSharpIcon
              sx={{
                margin: '1%',
                fontSize: '1.3rem',
                color: 'var(--secondary-color)'
              }}
            />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
          </ServiceInfoPointers>
          <ServiceInfoPointers>
            <CheckCircleSharpIcon
              sx={{
                margin: '1%',
                fontSize: '1.3rem',
                color: 'var(--secondary-color)'
              }}
            />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
          </ServiceInfoPointers>

          <Button>Explore</Button>
        </ServiceDesc>
      </ServiceWrapper>

      <ServiceWrapper>
        <ServiceDesc>
          <ServiceTitle>FIND LAWYER</ServiceTitle>
          <ServiceTitleDesc>
            Get Access to Quality Legal Practitioners for all your Legal Needs
          </ServiceTitleDesc>
          <ServiceInfo>
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
          </ServiceInfo>

          <ServiceInfoPointers>
            <CheckCircleSharpIcon
              sx={{
                margin: '1%',
                fontSize: '1.3rem',
                color: 'var(--secondary-color)'
              }}
            />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
          </ServiceInfoPointers>
          <ServiceInfoPointers>
            <CheckCircleSharpIcon
              sx={{
                margin: '1%',
                fontSize: '1.3rem',
                color: 'var(--secondary-color)'
              }}
            />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
          </ServiceInfoPointers>

          <Button>Explore</Button>
        </ServiceDesc>
        <ServiceImg>
          <div class='relative w-100% max-w-lg'>
            <div class='absolute top-4 right-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
            <div class='absolute top-60 left-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          </div>
          <img src={retired}></img>
        </ServiceImg>
      </ServiceWrapper>

    </Wrapper>
  )
}

export default ServiceDescription
