import React, { useState } from 'react'
import styled from 'styled-components'
import LawyerListCard from './LawyerListCard'
import LawyerProfile from './LawyerProfile'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import ServerUrl from '../../../constants.js'

const Hero = styled.div`
width:100%;
height:60vh;
background-color:blue;
`
const Container = styled.div`
width:100%;
height:200vh;
display:flex;
background-color:#f6f8faff;
align-items:center;
flex-direction:column;
`
const SearchContainer = styled.div`
    width:80%;
    height:13%;
    background-color:#e5f1fcff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-radius:10px;
    margin-top:-4%; 
    box-shadow: 0 0 10px  hsl(0, 0%, 81%);
    h1{
        font-weight:700;
        font-size:20px;
        margin-left:2%;
        margin-bottom:0.5%;
    } 
`
const Search = styled.div`
    
    width:100%;
    display:flex;

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
font-size:14px;
gap:20px;
margin-top:1%;
div{
    width:10%;
    height:60%;
    font-weight:600;
    border-radius:20px;
    border:1px solid  #0d265c;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:white;

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
    const [search, setSearch] = useState('')
    const [lawyer, setLawyer] = useState('')
    const [selectedLawyerData, setSelectedLawyerData] = useState(null);
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const recommended = async () => {
            const response = await fetch(`${ServerUrl}/recommend/`, {
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
            }
            else {
                const data = await response.json()
                console.log(data)
                setLawyer(data)
            }
        }
        recommended()
    }
    return (
        <div>
            <Hero />
            <Container>
                <SearchContainer>
                    <h1 >Type in your case details</h1>
                    <Search>
                        <TextField
                            placeholder='Type in your case details'
                            variant='outlined'
                            style={{ width: '80%', borderRadius: '10px', backgroundColor: 'white', marginLeft: '2%' }}
                            onChange={handleChange}
                        />
                        <Button
                            variant='contained'
                            style={{ width: '15%', height: '100%', borderRadius: '20px', backgroundColor: '#0d265c', color: 'white', marginLeft: '1%' }}
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
                            <button
                                onClick={() => setSelectedLawyerData(lawyerData)}
                            >
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
                            <LawyerProfile 
                                lawyerData={selectedLawyerData}
                            />
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
