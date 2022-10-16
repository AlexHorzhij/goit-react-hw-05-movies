import styled from 'styled-components';
import { Circles } from 'react-loader-spinner';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export default function Loading() {

    return (
        <Container>
            <Circles
          height="80"
          width="80"
          color="gray"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        </Container>
    )
};