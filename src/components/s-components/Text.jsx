import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
font-size:${({size})=>size || '16px'};
margin:${({m})=>m||'0'};
padding:${({p})=>p||'0'};
text-align:${({align})=>align};
color:${({color})=>color || '#fff'};
font-weight:${({w})=>w||'400'};
width:${({wid})=>wid||'auto'};
border-bottom:${({bb})=>bb};



@media (max-width:430px){
  width:375px;
  font-size:100%;
  margin-left:auto;
  margin-right:auto;
}
`

const Text = (p) => {
  return (
    <StyledText {...p} />
  )
}

export default Text