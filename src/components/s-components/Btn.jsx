import React from 'react'
import styled from 'styled-components'

const StyledBtn = styled.button`
border:none;
cursor:pointer;
padding:${({p})=>p||'0'};
font-size:${({size})=>size||'16px'};
color:${({color})=>color};
background-color:${({bg})=>bg};
margin:${({m})=>m||'0'};
border-radius:${({border})=>border};
outline:none;
`

const Btn = (p) => {
  return (
    <StyledBtn {...p} />
  )
}

export default Btn