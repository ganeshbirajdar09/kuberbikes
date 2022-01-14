import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 3000);
  }, [history]);
  return (
    <div className="not-found">
      <h1>Oooopss...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
