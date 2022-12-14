import styled from "styled-components";
import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div `
width: 100vw;
height: 100vh;
background-image: url(${bgImage});
background-size: cover;
overflow:hidden;
`

export const StyledTetris = styled.div `
display:flex;
align-items:flex-start;
padding:40px;
margin: 0 auto;
max-width:900px;
flex-wrap: wrap;
justify-content:center;

aside{
    
    display:block;
    max-width:200px;
    color:white;
    padding: 0 20px;
}
`