import styled from "styled-components";
import { IoPerson } from "react-icons/io5";

export const Img = styled.img`
    display: block;
    width: 120px;
    margin-right: ${p=>p.theme.space[4]}px;
`

export const Li = styled.li`
    display: flex;
    margin-bottom: ${p=>p.theme.space[4]}px;
`

export const Name = styled.div`
    font-size: ${p=>p.theme.fontSize.s};
    margin-bottom: ${p=>p.theme.space[3]}px;
`

export const CastWrapper = styled.ul`
    padding-left:${p => p.theme.space[5]}px;
    padding-top:${p=>p.theme.space[5]}px;
`

export const PlaceholderImg = styled(IoPerson)`
    color: ${p => p.theme.colors.main};
    width: 120px;
    height: 180px;
`