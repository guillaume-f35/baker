import React from 'react'
import styled from 'styled-components';

const Bark = ({bark}) => {
  return (
    <li>
       <div>
        <img src={bark.author.picture} alt='photo de profile'/>
        <h3>{bark.author.name}</h3>
        <p>{bark.author.accountName}</p>
        <p>{bark.content}</p>
        </div> 
    </li> 
  )
}

export default Bark