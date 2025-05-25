import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewByMovieID } from "../../api/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchingReviews = async () => {
      const { data } = await getMovieReviewByMovieID(movieId);
      setReviews(() => {
        return data.results ? data.results : [];
      });
    };
    fetchingReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews && reviews.length > 0 ? (
          reviews.map((el) => (
            <li key={el.id}>
              <h3>{el.author}</h3>
              <p>{el.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </>
  );
};

export default MovieReviews;
