import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { IoArrowUndoOutline } from "react-icons/io5";

export const ImgContainer = styled.div`
    min-width: 300px;
`
export const InfoContainer = styled.div`
    display: flex;
    gap: ${p=>p.theme.space[4]}px;
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p=>p.theme.space[4]}px;
    padding-left:${p => p.theme.space[5]}px;
    box-shadow: 5px 5px 5px 1px ${p=>p.theme.colors.shadow};
`

export const AddContainer = styled.div`
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p=>p.theme.space[4]}px;
    padding-left:${p=>p.theme.space[5]}px;
    box-shadow: 5px 5px 5px 1px ${p=>p.theme.colors.shadow};
`

export const BackButtonLink = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    padding: 4px 10px 4px 6px;
    font-size: ${p=>p.theme.fontSize.m};
    font-weight: ${p=>p.theme.fontWeight.normal};
    margin-left: ${p=>p.theme.space[5]}px;
    
    :hover{
        background-color: ${p=>p.theme.colors.hover};
        box-shadow: 1px 1px 5px 5px ${p=>p.theme.colors.hover};
    };
`

export const IoArrowUndoOutlineM = styled(IoArrowUndoOutline)`
    margin-right: ${p=>p.theme.space[3]}px;
    width: 30px;
    height: 20px;
`

export const FilmTitle = styled.h2`
    font-size: ${p=>p.theme.fontSize.l};
    margin-bottom: ${p=>p.theme.space[4]}px;
`

export const Title = styled.h3`
    font-size: ${p=>p.theme.fontSize.m};
    margin-bottom: ${p=>p.theme.space[4]}px;
`

export const Text = styled.p`
    font-size: ${p=>p.theme.fontSize.s};
    margin-bottom: ${p=>p.theme.space[4]}px;
    line-height: 1.5;
`

export const Li = styled.li`
    margin-bottom: ${p=>p.theme.space[3]}px;

    :hover{
        text-decoration: underline;
    };
`