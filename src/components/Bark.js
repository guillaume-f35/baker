import React from 'react'
import styled from 'styled-components';

const Bark = ({bark}) => {
  return (
    <li>
        <h2>{bark.author.name}</h2>
    </li> 
  )
}

export default Bark