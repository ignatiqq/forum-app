import React from "react";
import styled from "styled-components";

import { Button, NavigationLink } from '@atoms/index';
import { Navigation } from "@molecules/index";

const HeaderEl = styled.header`
    background: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px;
`;


const Header = () => {
    return (
        <HeaderEl>
            <Navigation>
                <NavigationLink to="/">Main</NavigationLink>
                <NavigationLink to="/login">Login</NavigationLink>
            </Navigation>
        </HeaderEl>
    )
}

export default Header;