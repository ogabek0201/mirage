import React from 'react'
import styled from 'styled-components'

const StyledHead=styled.h1`
font-size:${({size})=>size||'32px'};
font-weight:${({w})=>w||'400'};
text-align:${({align})=>align};
margin:${({m})=>m||'0'};
color:${({color})=>color||'black'};
width:${({wid})=>wid||'auto'};

// @media (max-width: 1030px){
//   width: 100px;
// }

@media (max-width:430px){
  width:375px;
  margin-left:0;
  font-size:300%;
}
`

function Head(p) {
  return (
    <StyledHead {...p} />
  )
}

export default Head