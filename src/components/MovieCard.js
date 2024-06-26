import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	const detailsUrl = `/movies/${movie.id}`
	return (
		<div className="col-lg-3 col-md-3 col-2 my-2">
			<div className="card">
				<img
					src={posterUrl}
					className="card-img-top"
					alt={movie.original_title}
				/>
				<div className="card-body">
					<h5 className="card-title">{movie.original_title}</h5>
					<Link to={detailsUrl} className="btn btn-primary">
						Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
