import React from 'react'
import styled from 'styled-components'
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';


const Wrapper= styled.div`
width:80%;
height:auto;
margin-top:6%;
display:flex;
flex-direction:column;
just-content:space-around;
`
const ServiceWrapper = styled.div`
width:100%;
height:23rem;
background-color:white;
display:flex;
margin-bottom:7%;
border-radius:10px;
overflow:hidden;
position:relative;
`
const ServiceImg = styled.img`
flex:2;
height:100%;
background-color:yellow;
`
const ServiceDesc = styled.div`
flex:4;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
`
const ServiceTitle = styled.div`
width:90%;
font-weight:500;
font-size:0.8rem;
color:var(--secondary-color);
`
const ServiceTitleDesc = styled.div`
width:90%;
font-weight:800;
font-size:2.3rem;
color:var(--primary-color);
`
const ServiceInfo= styled.div`
width:90%;
padding-right:8%;
font-weight:400;
font-size:1.05rem;
margin:1.3% 0 1%;
color:grey;
`
const ServiceInfoPointers = styled.div`
width:90%;
font-weight:600;
font-size:0.9rem;
`
const Button = styled.button`
align-self:flex-start;
width:7rem;
height:13%;
margin:3% 5% 0;
border:2px solid var(--primary-color);
background-color:var(--primary-color);
color:white;
border-radius:0 20px 20px;
font-weight:700;
font-size:1.1rem;
`



const ServiceDescription = () => {
  return (
    <Wrapper>
        <ServiceWrapper>
            <ServiceImg/>
            <ServiceDesc>
            <ServiceTitle>FIND LAWYER</ServiceTitle>
            <ServiceTitleDesc>Hello asldkflasdfas;lf asldfkjasd a;lsdfj;lasd l;ajsdfds </ServiceTitleDesc>
            <ServiceInfo>
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            </ServiceInfo>

            <ServiceInfoPointers>
            <CheckCircleSharpIcon  sx={{margin:'1%', fontSize:"1.3rem" , color:'var(--secondary-color)'}}  />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
            </ServiceInfoPointers>
            <ServiceInfoPointers>
            <CheckCircleSharpIcon  sx={{margin:'1%',fontSize:"1.3rem", color:'var(--secondary-color)'}}  />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
            </ServiceInfoPointers>

            <Button>Explore</Button>
            </ServiceDesc>
        </ServiceWrapper>

        <ServiceWrapper>
            <ServiceDesc>
            <ServiceTitle>FIND LAWYER</ServiceTitle>
            <ServiceTitleDesc>Hello ASDJFKLASJDF KLAJDSF;LASD A;LDKJF </ServiceTitleDesc>
            <ServiceInfo>
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            </ServiceInfo>

            <ServiceInfoPointers>
            <CheckCircleSharpIcon  sx={{margin:'1%', fontSize:"1.3rem" , color:'var(--secondary-color)'}}  />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
            </ServiceInfoPointers>
            <ServiceInfoPointers>
            <CheckCircleSharpIcon  sx={{margin:'1%',fontSize:"1.3rem", color:'var(--secondary-color)'}}  />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
            </ServiceInfoPointers>

            <Button>Explore</Button>
            </ServiceDesc>
            <ServiceImg/>
        </ServiceWrapper>


        <ServiceWrapper>
            <ServiceImg/>
            <ServiceDesc>
            <ServiceTitle>FIND LAWYER</ServiceTitle>
            <ServiceTitleDesc>Hello ASDJFKLASJDF KLAJDSF;LASD A;LDKJF </ServiceTitleDesc>
            <ServiceInfo>
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            akljfdasjdf;lasd lajdsf a;lsjdf asdfklj a;lsdfj al;sdj f;sljdfsfd
            </ServiceInfo>

            <ServiceInfoPointers>
            <CheckCircleSharpIcon  sx={{margin:'1%', fontSize:"1.3rem" , color:'var(--secondary-color)'}}  />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
            </ServiceInfoPointers>
            <ServiceInfoPointers>
            <CheckCircleSharpIcon  sx={{margin:'1%',fontSize:"1.3rem", color:'var(--secondary-color)'}}  />
            kalsjdfals;dfj;lasdfja kljads; fjas;d fd
            </ServiceInfoPointers>

            <Button>Explore</Button>
            </ServiceDesc>
           
        </ServiceWrapper>

        
    </Wrapper>
  )
}

export default ServiceDescription
