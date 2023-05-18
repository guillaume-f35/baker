import React from 'react'
import styled from 'styled-components';

const Li = styled.li`
    list-style-type: none;
`;
const ContainerBark = styled.div`
    display: flex;
    border-radius: 5px;
    margin-top: 10px;
    
`;

const Img = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-left: 3px
`;

const ContainerNew = styled.div`
    padding: 5px;
    font-family: ${props => props.theme.fontFamily};
`;

const Name = styled.span`
    font-weight: bold;
    color: black;
    font-size: 1rem;
`;

const AccountName = styled.span`
    color: lightgray; 
    font-size: 0.7rem;
    margin-left: 10px;
`;

const Time = styled.span`
    color: lightgray; 
    font-size: 0.7rem;
    margin-left: 10px;
`;

const Unit = styled.span`
    color: lightgray; 
    font-size: 0.7rem;
    margin-left: 3px;
`;

const Bark = ({bark}) => {
  return (
    <Li>
       <ContainerBark>
        <Img src={bark.author.picture} alt='photo de profile'/>
        <ContainerNew>
            <Name>{bark.author.name}</Name>
            <AccountName>{bark.author.accountName}</AccountName>
            <Time>{bark.posted.time}</Time>
            <Unit>{bark.posted.unit}</Unit>
            <p>{bark.content}</p>
        </ContainerNew>
        </ContainerBark> 
    </Li> 
  )
}

export default Bark