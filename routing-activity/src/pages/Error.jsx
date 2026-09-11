import { Helmet } from "react-helmet-async";
import "./Error.css";

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Oops! Error Found</title>
      </Helmet>
      <div className="error-container">
        <p>Oops!</p>
        <p>PAGE NOT FOUND</p>
        <p>Your search is probably in another dimension</p>
      </div>
    </>
  );
};

export default Error;