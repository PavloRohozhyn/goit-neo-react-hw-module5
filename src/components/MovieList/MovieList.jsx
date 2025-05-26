import { Link, useLocation } from "react-router-dom";

import css from "./MovieList.module.css";

const MovieList = ({ data }) => {
  const location = useLocation();
  return (
    <>
      <ul className={css.movieList}>
        {data &&
          data.map((el) => (
            <li key={el.id} className={css.movieListItem}>
              <Link to={`/movies/${el.id}`} state={location}>
                {el.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieList;
