import React from "react";
import styled, { css, keyframes } from "styled-components";

const StyledLine = styled.div`
font-size:24px;
color: ${props => props.color || 'white'};
`

const Line = (props) => {
    return (
        <StyledLine {...props}/>
    )
};

export default Line;