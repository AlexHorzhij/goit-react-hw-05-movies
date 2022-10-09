import styled from 'styled-components';
import { NavLink } from "react-router-dom";


// export const Container = styled.div`
//     display: flex;
//     justify-content: start;
//     align-items: flex-start;
// `

// export const Header = styled.header`
//     display: flex;
//     padding: 15px;
//     font-size: 20px;
//     background-color: beige;
// `

export const StyledLink = styled(NavLink)`
    display: flex;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
`

export const Nav = styled.nav`
    display: flex;
    gap: 20px;
`