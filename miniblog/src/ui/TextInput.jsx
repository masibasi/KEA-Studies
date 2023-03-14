import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    margin-top: 16px;
    margin-bottom: 8px;
    width: calc(100% - 32px);
    ${(props) => props.height && `height: ${props.height}px;`} padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

export const TextInput = (props) => {
    const { height, value, onChange } = props;
    return <StyledTextarea height={height} value={value} onChange={onChange} />;
};
