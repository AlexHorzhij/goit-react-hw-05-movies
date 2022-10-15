import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.header`
    display: flex;
    font-size: ${p=>p.theme.fontSize.l};
    box-shadow: 0px 1px 10px 1px ${p=>p.theme.colors.shadow};
    margin-bottom: ${p=>p.theme.space[4]}px;
    padding-left: ${p=>p.theme.space[4]}px;
`

export const StyledLink = styled(NavLink)`
    font-weight: ${p=>p.theme.fontWeight.normal};
    display: flex;
    padding: ${p=>p.theme.space[4]}px;
    color: ${p => p.theme.colors.text};
    
    :hover{
        background-color: ${p=> p.theme.colors.hover};
        box-shadow: 0px 0px 4px 4px ${p=> p.theme.colors.hover};
    };
    &.active{
        color: ${p=> p.theme.colors.accent};
    };
`
export const Nav = styled.nav`
    display: flex;
    gap: ${p=>p.theme.space[4]}px;
`