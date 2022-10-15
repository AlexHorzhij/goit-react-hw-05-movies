import styled from 'styled-components';

export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${p=>p.theme.space[3]}px;
    font-size: ${p=>p.theme.fontSize.l};
`
export const Li = styled.li`
    :hover{
        text-decoration: underline;
    }
`

export const HomeTitle = styled.h1`
    margin-bottom: ${p=>p.theme.space[4]}px;
`

export const Main = styled.main`
    padding-left: ${p=>p.theme.space[5]}px;
`