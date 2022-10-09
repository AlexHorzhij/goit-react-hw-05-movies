import { useState, useEffect } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import { getMovieById } from "services/ApiServise";
import {InfoContainer, AddContainer} from "./MovieDetails.styled"

export function MovieDetails() {
    const [film, setFilm] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getMovieById(id).then(setFilm)
    }, [id]
    );

    if (film) {
        const genresFilm = film.genres.map(a => a.name)
    return (
        <>
            <button>Go back</button>
            <InfoContainer>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt=""/>
                </div>
                <div>
                    <h2>{ film.title }</h2>
                    <p>User Score {Math.round(film.vote_average * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{ film.overview}</p>
                    <h3>Genres</h3>
                    <p>{genresFilm.join(", ")}</p>
                </div>
            </InfoContainer>
            <AddContainer>
                <h3>Addition informayion</h3>
                <ul>
                    <li>
                        {/* <Link key="cast" to='cast'>Cast</Link> */}
                    </li>
                    <li>
                        <Link key="reviewe" to='reviewe'>Reviewe</Link>
                    </li>

                </ul>
            </AddContainer>
            <Outlet />
        </>
    )}
}