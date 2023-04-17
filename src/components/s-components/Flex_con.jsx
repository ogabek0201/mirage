import React from 'react'
import styled from 'styled-components'

const StyledFlex=styled.div`
display: flex;
flex-wrap:${({wrap})=>wrap||'nowrap'};
flex-direction: ${({dir})=>dir||'row'} ;
justify-content: ${({jes})=>jes||'scretch'};
align-items:${({align})=>align || 'center'};
margin:${({m})=>m||'0'};
gap:${({gap})=>gap|| '0'};
height:${({h})=>h||'auto'};
border-bottom:${({bb})=>bb};
width:${({w})=>w||'auto'};
padding:${({p})=>p||'0'};
background-color:${({bg})=>bg};

@media (max-width: 1000px){
  flex-wrap:wrap;
  // width:100%;
  text-align:center;
  gap:30px;
  
}

@media (max-width:770px){
  justify-content:center;
}

@media (max-width:700px){
  height:auto;

}

@media (max-width: 430px){
  flex-wrap:wrap;
  width:400px;
}
`

const Flex_con = (p) => {
  return <StyledFlex {...p} />
}

export default Flex_con