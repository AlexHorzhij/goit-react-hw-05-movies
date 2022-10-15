import styled from "styled-components";

export const Input = styled.input`
    width: 300px;
    height: 30px;
    padding-left: ${p=>p.theme.space[3]}px;
    font-size: ${p=>p.theme.fontSize.s};
    margin-right: ${p => p.theme.space[2]}px;    
`

export const Button = styled.button`
    height: 36px;
    font-size: ${p => p.theme.fontSize.s};
    font-weight: ${p=>p.theme.fontWeight.bolt};
    background-color: transparent;
    border: 1px solid ${p => p.theme.colors.main};
    border-radius: ${p=>p.theme.radii.normal};
    
    :hover{
        background-color: ${p=>p.theme.colors.main};
        color: ${p=>p.theme.colors.white};
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: ${p=>p.theme.space[5]}px;
`
