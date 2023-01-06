import styled from "styled-components";

export const StyledStage = styled.div `
display:grid;
grid-template-rows: repeat(${props => props.height} , calc(35vw /${props => props.height} ) );
grid-template-columns: repeat(${props => props.width}, 1fr);
gap:1px;
border: 2px solid #333;
width:100%;
max-width:25vw;
background-color: #111;
`