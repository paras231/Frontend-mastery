import React from 'react'
import styled from 'styled-components'
import beach from "../assets/beach.png";
import Select from 'react-select';


const MainDiv = styled.div`
width:100%;
height:30vmax;
background-image: url(${beach});
background-repeat: no-repeat;
`
const Test2 = () => {

  const [selectedOption, setSelectedOption] = React.useState(null);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <>
    <MainDiv></MainDiv>
    <div
     style={{width:"30vw"}}
    >
    <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
       
      />
      </div>
    </>
  )
}

export default Test2