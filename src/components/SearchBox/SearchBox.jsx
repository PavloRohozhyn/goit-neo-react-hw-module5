import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBox.module.css";

const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const v1 = query.trim();
    if (!v1) {
      toast.error("Please enter a search keywords");
      return;
    }
    onSubmit(query);
  };

  return (
    <form onSubmit={submitHandler} className={css.formWrap}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
      <Toaster />
    </form>
  );
};

export default SearchBox;
