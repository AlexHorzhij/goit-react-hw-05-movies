import styled from 'styled-components';
import { NavLink } from "react-router-dom";


// export const Container = styled.div`
//     display: flex;
//     justify-content: start;
//     align-items: flex-start;
// `

export const HeaderBox = styled.header`
    display: flex;
    /* padding: 15px; */
    font-size: 20px;
    border-bottom: 1px solid gray; 
    margin-bottom: 20px;
    padding-left: 10px;
`

export const StyledLink = styled(NavLink)`
    font-weight: 500;
    display: flex;
    padding: 20px;
    color: black;
    /* border: 1px solid black;
    border-radius: 5px; */
    :hover{
        background-color: beige;
        color: red;
    };
    &.active{
             color: red;
   
    }
`

export const Nav = styled.nav`
    display: flex;
    gap: 20px;
`