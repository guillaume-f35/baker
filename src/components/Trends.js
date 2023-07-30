import React from 'react';
import styled from 'styled-components';
import Tendency from './Tendency.js';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background: #f1f3f3;
`;

const H2 = styled.h2`
  font-family: ${props => props.theme.fontFamily};
  margin: 10px;
`;

const Trends = ({data}) => {
  return (
    <Container>
      <H2>Tendances pour vous</H2>
      <ul>
        {data.map((tendency) => (
            <Tendency key={tendency.id} tendency={tendency}/>
        ))}
      </ul>
    </Container>
  )
}

export default Trends