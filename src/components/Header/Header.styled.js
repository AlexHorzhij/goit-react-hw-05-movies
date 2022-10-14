import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.header`
    display: flex;
    font-size: 20px;
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    padding-left: 10px;
`

export const StyledLink = styled(NavLink)`
    font-weight: 500;
    display: flex;
    padding: 20px;
    color: black;
    :hover{
        background-color: rgba(0, 0, 0, 0.05);
        box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.05);
    };
    &.active{
        color: red;
    }
`
export const Nav = styled.nav`
    display: flex;
    gap: 20px;
`