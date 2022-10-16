import { useSearchParams, Link, useLocation } from "react-router-dom";
import { SearchForm } from '../../components/Form/Form';
import { getSearchMovies } from '../../services/ApiServise';
import { useState, useEffect } from "react";
import { Main, Ul, Li } from './Movies.styled';

export default function Movies(){
    const [query, setQuery] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('query') ? searchParams.get('query') : '';
    const [searchMovie, setSearchMovie] = useState(filter);
    const location = useLocation();

    useEffect(() => {
        getSearchMovies(searchMovie).then(setQuery)
    }, [searchMovie]
    );

    const searchMove = (value) => {
        setSearchMovie(value);
    }
    
    const changeFilter = (value) => {
        setSearchParams(!value ? '' : { query: value });
    };

    if (query) 
    return (
        <Main>
            <SearchForm changeFilter={changeFilter} searchMove={searchMove} filter={filter} />
            <Ul>
                {query && query.results.map(movie =>
                    (<Li key={movie.id}><Link to={`${movie.id}`} state={{ from: location }}>{movie.title}</Link></Li>))
                }
            </Ul>
        </Main>
    )
};