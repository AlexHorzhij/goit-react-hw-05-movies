import { Route, Routes } from "react-router-dom";
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Layout } from './Layout/Layout';
import { Cast } from './Cast/Cast';
import { Reviewe } from './Reviews/Reviewe';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviewe" element={<Reviewe />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
