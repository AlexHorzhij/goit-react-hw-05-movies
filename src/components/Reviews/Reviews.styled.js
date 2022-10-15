import styled from "styled-components";

export const Li = styled.li`
    margin-bottom: 20px;
`;

export const Author = styled.h3`
    margin-bottom: 15px;
`;

export const Text = styled.p`
    line-height: 1.5;
`;

export const Placeholder = styled.p`
    padding-left: 30px;
`;

export const ReviewsWrapper = styled.ul`
    padding-left:${p => p.theme.space[5]}px;
    padding-top:${p=>p.theme.space[5]}px;
`