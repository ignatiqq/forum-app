import styled from "styled-components";

const DefaultButton = styled.button`
    padding: 10px 15px;
    color: ${props => props.theme.colors.primaryText};
    border: 1px solid ${props => props.theme.colors.primary};
    background: transparent;
    font-size: ${props => props.theme.fonts.normal};
    opacity: ${props => props.disabled ? ".8" : "1"};
    transition: ${props => props.theme.transition.hover};
    cursor: pointer;
    &:hover {
        background: ${props => props.theme.colors.primary};
    }
`;

export {
    DefaultButton as Button,
}