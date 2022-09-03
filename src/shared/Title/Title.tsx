import React from "react";
import styled from "styled-components";

interface ITitleProps {
  children: React.ReactNode;
  level: number;
  margin?: string;
}

interface IStyledTitle extends ITitleProps {
  as: React.ElementType
}

const sizeToHeading: Record<string, React.ElementType> = { // use ElementType here
  "0": "p",
  "1": "h1",
  "2": "h2",
  "3": "h3",
  "4": "h4",
  "5": "h5",
  "6": "h6"
};

const StyledTitle = styled.div<IStyledTitle>`
  font-size: ${({level}) => 4 / level}em;
  margin: ${({ margin }) => margin || 0};
`;

const Heading: React.FC<ITitleProps> = (props) => {
  return (
    <StyledTitle as={props.level ? sizeToHeading[props.level]: "h1"} level={props.level}>
      {props.children}
    </StyledTitle>
  )
}

export default Heading;