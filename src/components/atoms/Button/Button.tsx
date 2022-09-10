import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
  children: React.ReactNode;
  onClick: (data?: any) => any;
  background?: string;
  textAlign?: string;
}

const DefaultButton = styled.button<IButtonProps>`
  padding: 10px 15px;
  color: ${(props) => props.theme.colors.primaryText};
  border: 1px solid ${(props) => props.theme.colors.primary};
  background: ${({ background }) => background || 'white'};
  font-size: ${(props) => props.theme.fonts.normal};
  opacity: ${(props) => (props.disabled ? '.8' : '1')};
  transition: ${(props) => props.theme.transition.hover};
  cursor: pointer;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  &:hover {
    background: ${(props) => props.theme.colors.primary};
  }
`;

const Button: React.FC<IButtonProps> = (props) => {
  return <DefaultButton {...props}>{props.children}</DefaultButton>;
};

export default Button;
