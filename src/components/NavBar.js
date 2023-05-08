import React from 'react';
import bakerIcon from './pictures/baker-icon.png';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background: red;
  align-items: center;
`;


const ContainerIcon = styled.div`
  width: 70%;
  height: auto;
  margin-top: 3rem;
`;

const Icon = styled.img`
  width: 100%;
  height: auto;
`;

const navBar = () => {
  return (
    <Container>
        <ContainerIcon>
            <Icon src={bakerIcon} alt='baker icon'/>
        </ContainerIcon>
    </Container>
  )
};

export default navBar;