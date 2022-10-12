import { Main, Message, Icon,GoHome } from './NotFound.styled'

export const NotFound = () => {
    return (
        <Main>
            <Message>Page Not Found</Message>
            <Icon />
            <GoHome to="/">Go to main</GoHome>
        </Main>
    )
}