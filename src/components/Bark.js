import React from 'react'
import styled from 'styled-components';

const Li = styled.li`
    list-style-type: none;
`;
const ContainerBark = styled.div`
    display: flex;
`;

const Img = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
`;

const Bark = ({bark}) => {
  return (
    <Li>
       <ContainerBark>
        <Img src={bark.author.picture} alt='photo de profile'/>
        <div>
            <span>{bark.author.name}</span>
            <span>{bark.author.accountName}</span>
            <p>{bark.content}</p>
        </div>
        </ContainerBark> 
    </Li> 
  )
}

export default Bark