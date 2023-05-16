import React from 'react'
import styled from 'styled-components';
import Bark from './Bark';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  border-left: 1px solid gray
`;

const Posts = ({data}) => {

  return (
    <Container>
      <ul>
        {data.map((bark) => (
          <Bark key={bark.id} bark={bark} />
        ))}
      </ul>
    </Container>
  )
}

export default Posts 