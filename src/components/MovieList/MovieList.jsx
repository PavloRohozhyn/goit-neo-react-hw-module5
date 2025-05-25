import { Link } from "react-router-dom";

const MovieList = ({ data }) => {
  return (
    <>
      {data &&
        data.map((el) => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}>{el.title}</Link>
          </li>
        ))}
    </>
  );
};

export default MovieList;
