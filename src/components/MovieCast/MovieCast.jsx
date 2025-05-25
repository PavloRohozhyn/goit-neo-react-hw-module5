import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCastByMovieID } from "../../api/api";
import noimg from "../../no-photo.avif";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchingCast = async () => {
      const { data } = await getMovieCastByMovieID(movieId);
      setCast(() => {
        return data.cast ? data.cast : [];
      });
    };
    fetchingCast();
  }, [movieId]);

  return (
    <>
      <ul>
        {cast && cast.length > 0 ? (
          cast.map((el) => (
            <li key={el.id}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                    : noimg
                }
                alt={el.name}
                width="120px"
              />
              <h3>{el.name}</h3>
              <p>Character: {el.character}</p>
            </li>
          ))
        ) : (
          <p>No data</p>
        )}
      </ul>
    </>
  );
};

export default MovieCast;
