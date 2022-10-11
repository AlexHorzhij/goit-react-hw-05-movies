import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { IoArrowUndoOutline } from "react-icons/io5";


export const ImgContainer = styled.div`
    min-width: 300px;
`

export const InfoContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 15px 0px;
    border-bottom: 1px solid gray;

`

export const AddContainer = styled.div`
    padding: 15px 0px;
    border-bottom: 1px solid gray;
    margin-bottom: 20px;
`

export const Main = styled.main`
    padding-left:30px;
`

export const BackButtonLink = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    /* border-bottom: 1px solid gray; */
    padding: 5px 10px;
    font-size: 1.17em;
    font-weight: 500;
    :hover{
        background-color: gray;
        color: white;
    }
`

export const IoArrowUndoOutlineM = styled(IoArrowUndoOutline)`
    margin-right: 8px;
    width: 30px;
    height: 20px;
`

export const FilmTitle = styled.h2`
font-size: 1.5em;
margin-bottom: 20px;
`

export const Title = styled.h3`
font-size: 1.17em;
margin-bottom: 20px;
`

export const Text = styled.p`
font-size: 1em;
margin-bottom: 20px;
line-height: 1.5;
`

export const Li = styled.li`
    margin-bottom: 10px;

    :hover{
        text-decoration: underline;
    }
`