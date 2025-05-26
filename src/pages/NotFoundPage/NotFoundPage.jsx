import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <p>404, Page Not Found.</p>
      <Link to="/">Home</Link>
    </>
  );
};

export default NotFoundPage;
