import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {getTrending} from '../../services/ApiServise'
// const axios = require('axios').default;
import { Ul } from './Home.styled';


export default function Home() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        getTrending().then(setMovies)
    }, []
    );

    console.log(movies)
    const { results } = movies;
    console.log(results)

    return (
        <main>
            <h1>Trending today</h1>
            <Ul>
                {results && results.map(movie => (<li key={movie.id}><Link to={`movies/${movie.id}`}>{movie.title}</Link></li>))}
            </Ul>
        </main>
    );
};