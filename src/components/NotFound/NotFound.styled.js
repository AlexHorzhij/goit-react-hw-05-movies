import styled from "styled-components";
import { MdSentimentVeryDissatisfied } from "react-icons/md";
import { NavLink } from 'react-router-dom'

export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 50px;
`

export const Message = styled.div`
font-size: 56px;
font-weight: 500;
padding-bottom: 20px;
`

export const Icon = styled(MdSentimentVeryDissatisfied)`
width: 300px;
height: 300px;
fill: gray;
padding-bottom: 20px;
`

export const GoHome = styled(NavLink)`
    font-size: 32px;
    color: black;
    :hover{
        text-decoration: underline;
    }
`
