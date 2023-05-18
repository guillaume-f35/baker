import React from 'react'
import styled from 'styled-components';
import Bark from './Bark';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  background: #f8f9f9;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;

const Posts = ({data}) => {

  return (
    <Container>
      <Ul>
        {data.map((bark) => (
          <Bark key={bark.id} bark={bark} />
        ))}
      </Ul>
    </Container>
  )
}

export default Posts 