import React from 'react';

import styled from "styled-components";

const Header = styled.header`
    background: ${props => props.theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px;
`;

export default Header;