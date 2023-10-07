import PropTypes from "prop-types"
import { Link } from 'react-router-dom';

function Movie({ id, image, title, summary, genres }) {
    return (
        <div>
            <hr />
            <img src={image} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <h3>장르:</h3>
            <p>{genres.map((g) => (
                <ul>
                    <li key={g}>{g}</li>
                </ul>
            ))}</p>
        </div>
    )
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie