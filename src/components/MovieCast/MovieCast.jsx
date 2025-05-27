import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCastByMovieID } from "../../api/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

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
                    : defaultImg
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
