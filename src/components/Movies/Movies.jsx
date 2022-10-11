import { useSearchParams, Link, useLocation } from "react-router-dom";
import { SearchForm } from '../Form/Form';
import { getSearchMovies } from '../../services/ApiServise';
import { useState, useEffect } from "react";
import { Main, Ul, Li } from './Movies.styled';

export const Movies = () => {
    const [query, setQuery] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    useEffect(() => {
        const searchQuery = searchParams.get('query')
        getSearchMovies(searchQuery).then(setQuery)
    }, [searchParams]
    );
    
    const getSearchMove = (value) => {
        setSearchParams(!value ? '' : { query: value });
    };
    if (query) console.log(query)
    return (
        <Main>
            <SearchForm getSearchMove={getSearchMove} />
            <Ul>
                {query && query.results.map(movie =>
                    (<Li key={movie.id}><Link to={`${movie.id}`} state={{ from: location }}>{movie.title}</Link></Li>))
                }
            </Ul>
        </Main>
    )
};