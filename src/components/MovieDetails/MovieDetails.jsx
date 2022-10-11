import { useState, useEffect } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { getMovieById } from "services/ApiServise";
import { InfoContainer, AddContainer } from "./MovieDetails.styled";
import { Main, BackButtonLink, IoArrowUndoOutlineM, FilmTitle, Title, Text, Li, ImgContainer } from './MovieDetails.styled';

export const MovieDetails = () => {
    const [film, setFilm] = useState(null);
    const { id } = useParams();
    const location = useLocation();
    const from = location.state?.from || "/";

    const infoLink = (name) => {
        const toggle = location.pathname.includes(name);
        const link = toggle ? `/movies/${id}` : `/movies/${id}/${name}`;
        return link;
    }
  
    useEffect(() => {
        getMovieById(id).then(setFilm)
    }, [id]
    );

    if (!film) { return null }
    const placeholder = '/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
    const genresFilm = film.genres.map(a => a.name)
    return (
        <Main>
            <BackButtonLink to={from}><IoArrowUndoOutlineM />Go back</BackButtonLink>
            <InfoContainer>
                <ImgContainer>
                    <img src={`https://image.tmdb.org/t/p/w300${film.poster_path || placeholder}`} alt="" />
                </ImgContainer>
                <div>
                    <FilmTitle>{film.title}</FilmTitle>
                    <Text>User Score: {Math.round(film.vote_average * 10)}%</Text>
                    <Title>Overview</Title>
                    <Text>{film.overview}</Text>
                    <Title>Genres</Title>
                    <Text>{genresFilm.join(", ")}</Text>
                </div>
            </InfoContainer>
            <AddContainer>
                <Title>Addition information</Title>
                <ul>
                    <Li>
                        <Link key="cast" to={infoLink("cast")} state={{ from }}>Cast</Link>
                    </Li>
                    <Li>
                        <Link key="reviewe" to={infoLink("reviewe")} state={{ from }}>Reviewe</Link>
                    </Li>
                </ul>
            </AddContainer>
            <Outlet />
        </Main>
    )
};