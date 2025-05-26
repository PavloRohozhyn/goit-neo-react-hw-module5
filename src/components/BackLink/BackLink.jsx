import { useLocation, Link } from "react-router-dom";
import { useRef } from "react";

import css from "./BackLink.module.css";

const BackLink = () => {
  const lst = useLocation();
  const back = useRef(lst.state ?? "/movies");
  return (
    <>
      <div className={css.backLinkWrapper}>
        <Link to={back.current}>Go back</Link>;
      </div>
    </>
  );
};

export default BackLink;
