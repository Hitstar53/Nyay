import React from 'react'
import styled from 'styled-components'
import SchoolIcon from '@mui/icons-material/School'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import StarIcon from '@mui/icons-material/Star'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Button from '@mui/material/Button';
import ServerUrl from '../../../constants.js'

const Container = styled.div`
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BookingCard = styled.div`
 width:80%;
 height:85%;
  display: flex;
  border-radius:20px;
  box-shadow: 0 -10px #0d265c;
  overflow:hidden;
  border:2px solid #0d265c;
`
const BookingContent = styled.div`
  flex:2;
  display: flex;
  flex-direction:column;
  justify-content:center;
`

const LawyerInfo = styled.div`
  height: 40%;
  width:100%;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  color: #0d265c;
`
const LawyerInfoTop = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  h1 {
    margin: 5%;
    font-weight: 800;
  }
`
const LawyerImg = styled.div`
  width: 17%;
  height: 90%;
  border-radius: 100px;
  background-color: yellow;
`
const LawyerSmallInfo = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin: 2% 0.8%;
  letter-spacing: 1px;
`
const LawyerExp = styled.div`
  font-weight: 700;
  font-size: 15px;
  display: flex;
  align-items: center;
  span {
    margin: 0 3% 0 0.8%;
  }
`
const BookingInfoCard = styled.div`
  width: 60%;
  height: 35%;
color:#0d265c;
  background-color: #a5dbf4;
  border-radius: 20px;
  margin:5%;
  display:flex;
  flex-direction:column;
  padding:20px;
 
  
  .type{
    font-weight:800;
    font-size:35px;
  }

.info{
    margin-top:5%;
    padding:0;
    display:flex;
    justify-content:space-between;
}
  .vid{
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:24%;
    font-size:20px;
  }

  .price{
    font-weight:900;
    font-size:40px;
  }

`
const ButtonGrp=styled.div`
width:80%;
height:15%;
margin-top:5%;
display:flex;
justify-content:space-between;
font-size:13px;
div{
    width:30%;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100%;
    border:2px solid white;
    border-radius:20px;
}
`
const CalendarContainer = styled.div`
  flex: 1;
  height: 100%;
  background-color: #0d265c;
`
const PostBooking = () => {
  const appointmentHandler = (e) => {
    e.preventDefault();
    const aptmnt = async () => {
      const response = await fetch(
        `${ServerUrl}/client/appointments/65032f9144f645e19172fdb8`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: "My tenant committed suicide in my flat.",
            lawyerName: "John Doe",
            aptDate: "2023-09-25",
            startTime: "10:00",
            endTime: "12:00",
          }),
        }
      );
      if (!response.ok) {
        console.log("error");
      } else {
        const data = await response.json();
        console.log(data);
      }
    };
    aptmnt();
  }
  return (
    <div>
      <Container>
        <BookingCard>
          <BookingContent>

            <LawyerInfo>
              <LawyerInfoTop>
                <LawyerImg />
                <h1>Adv. Shubh Gupta </h1>
              </LawyerInfoTop>

              <LawyerSmallInfo>Bain & Co | Supreme Court </LawyerSmallInfo>
              <LawyerExp>
                <SchoolIcon />
                <span>Civil/Property Law</span>
                <BusinessCenterIcon />
                <span>Civil/Property Law</span>
                <StarIcon />
                <span>5</span>
              </LawyerExp>

            </LawyerInfo>
            <BookingInfoCard>
            <div className='consultation'>Consultation</div>
            <div class="type">Introduction of Case </div>
            <div class="info">
               <div className='vid'><VideoCallIcon sx={{fontSize:40}}/> 1:1 Call</div> 
                <div className='price'>$200</div>
            </div>
            <ButtonGrp>
                <div>Case Review</div>
                <div>Legal Counsel</div>
                <div>Best Steps</div>
            </ButtonGrp>
            </BookingInfoCard>
          </BookingContent>
          <CalendarContainer>
            <Button
              variant='contained'
              sx={{
                width: '80%',
                height: '10%',
                backgroundColor: '#0d265c',
                color: 'white',
                borderRadius: '20px',
                margin: '5% 10%',
                fontSize: '15px',
              }}
              onClick={appointmentHandler}
            >
              Make Appointment
            </Button>
          </CalendarContainer>
        </BookingCard>
      </Container>
    </div>
  )
}

export default PostBooking
