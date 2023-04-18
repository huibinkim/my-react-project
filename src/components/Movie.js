import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import styles from "./Movie.module.css";

function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div>
      <div>
        <div>
          <img src={coverImg} alt={title} />
          <div className="con-txt">
            <h2>
              <Link to={`/movie/${id}`}> {title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
