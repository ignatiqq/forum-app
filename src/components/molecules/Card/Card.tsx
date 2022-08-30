import { IAllAnimesData } from '@api/endpoints/anime/avaliableAnime';
import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
    padding: 10px;
`;

interface ICardProps extends IAllAnimesData {
}

const Card: React.FC<ICardProps> = ({images, title, duration}) => {
  return (
    <CardStyled>
        <img src={images?.jpg?.image_url} />
        <h1>{title ? title : "Has no title"}</h1>
        <h3>Duration: {duration ? duration : "unknown"}</h3>
    </CardStyled>
  )
}

export default Card