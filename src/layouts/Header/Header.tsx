import styled from "styled-components";

const Header = styled.header`
    background: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px;
`;

export default Header;