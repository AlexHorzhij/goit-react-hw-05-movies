import styled from "styled-components";

export const Input = styled.input`
    width: 300px;
    height: 30px;
    font-size: 24px;
    margin-right: 2px;
`

export const Button = styled.button`
    height: 36px;
    font-size: 20px;
    background-color: transparent;
    border: 1px solid gray;
    :hover{
        background-color: gray;
        color: white;
    }
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
