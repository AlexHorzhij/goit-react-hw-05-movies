import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./Loading/Loading";
import { Layout } from './Layout/Layout';
import { NotFound } from './NotFound/NotFound';
import { theme } from './Thema';
import { ThemeProvider } from "styled-components";

const  Home = lazy (() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviewe = lazy(() => import('./Reviews/Reviewe'));


export const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />}/>
              <Route path="movies/:id" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviewe" element={<Reviewe />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />}/>
          </Routes>
          </Suspense>
        </ThemeProvider>
    </div>
  );
};
