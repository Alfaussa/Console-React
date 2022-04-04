import React from "react";
import styled, { css, keyframes } from "styled-components";

const rotateAnimation =  keyframes`
0% {
    transform:rotateZ(0deg);
}
50% {
    transform:rotateZ(180deg);
}
100%{
    transform:rotateZ(360deg);
}
`
const StyledButton = styled.button`
border:none;
padding:10px 15px;
cursor:pointer;
font-size:18px;
&:focus {
    outline:none
}

&:hover {
    animation: ${rotateAnimation} 1s infinite linear;
}

align-self:${props => props.align || "stretch"};

${props => props.outlined && css`
    color: ${props => props.color || 'white'};
    background: transparent;
    border: 1px solid ${props => props.color || 'white'};
    `
}
`
const LargeButton = styled(StyledButton)`
font-size:32px;
 `
const Button = (props) => {
    return (
        <LargeButton {...props}/>
    )
};

export default Button;