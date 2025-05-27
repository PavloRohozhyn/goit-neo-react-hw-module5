import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import BackLink from "../../components/BackLink/BackLink";
import { getMovieByMovieID } from "../../api/api";

import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    const fetchingDetails = async () => {
      const { data } = await getMovieByMovieID(movieId);
      setDetails(data);
    };
    fetchingDetails();
  }, [movieId]);

  return (
    <>
      <BackLink />
      <div className={css.detailContainer}>
        {details && (
          <>
            <div className={css.detailLeft}>
              <img
                src={
                  details.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${details.poster_path}`
                    : defaultImg
                }
                alt={details.title}
                width="300px"
              />
            </div>

            <div className={css.detailRight}>
              <h2>{details.title}</h2>
              <p>User Score: {details.vote_average}</p>
              <h3>Overview</h3>
              <p>{details.overview}</p>
              <h3>Genres</h3>
              <ul>
                {details.genres &&
                  details.genres.map((el) => <li key={el.id}>{el.name}</li>)}
              </ul>
            </div>
          </>
        )}
      </div>
      <hr />
      <h2>Additional Information</h2>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
