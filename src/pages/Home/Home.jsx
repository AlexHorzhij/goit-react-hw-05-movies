import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from '../../services/ApiServise';
import { Ul, HomeTitle, Main, Li } from './Home.styled';


export default function Home(){
    const [movies, setMovies] = useState(null);
    const location = useLocation()
    
    useEffect(() => {
        getTrending().then(setMovies)
    }, []
    );

    return (
        <Main>
            <HomeTitle>Trending today</HomeTitle>
            <Ul>
                {movies && movies.results.map(movie => (<Li key={movie.id}><Link to={`movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link></Li>))}
            </Ul>
        </Main>
    );
};