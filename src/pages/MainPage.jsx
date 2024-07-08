import { useEffect } from "react";
import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../redux/actions/movieAction";
import { getGenres } from "../redux/actions/genreAction";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
import Error from "../components/Error";

const MainPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error, genres } = useSelector((store) => store.genre);

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);
  return (
    <div>
      <Hero />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        genres.map((genre) => <MovieList genre={genre} key={genre.id} />)
      )}
    </div>
  );
};

export default MainPage;
