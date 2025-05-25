import { useRef } from "react";
import { useLocation, Link } from "react-router-dom";

const Back = () => {
  const location = useLocation();
  const backUrl = useRef(location.state ?? "/movies");

  return <Link to={backUrl.current}>Go back</Link>;
};

export default Back;
