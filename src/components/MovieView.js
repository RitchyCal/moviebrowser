import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

const MovieView = () => {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const fetch = require("node-fetch");
	useEffect(() => {
		const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
		const options = {
			method: "Get",
			headers: {
				accept: "application/json",
				Authorization: process.env.REACT_APP_TMD_BEARER,
			},
		};
		fetch(url, options)
			.then((res) => res.json())
			.then((json) => {
				setMovieDetails(json);
				setIsLoading(false);
			})
			.catch((err) => console.error("error:" + err));
	}, [fetch, id]);

	const renderMovieDetails = () => {
		if (isLoading) {
			return <Hero text="Loading..." />;
		}
		if (movieDetails) {
			//  todo: deal with missing imaheg
			const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
            const backDropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
			return (
				<>
					<Hero text={movieDetails.original_title} backdrop={backDropUrl}/>
					<div className="container my-5">
						<div className="row">
							<div className="col-md-3">
								<img
									src={posterPath}
									alt="poster"
									className="img-fluid shadow rounded"
								/>
							</div>
							<div className="col-md-9">
								<h2>{movieDetails.original_title}</h2>
								<p className="lead">{movieDetails.overview}</p>
								<div className="row">
									<p>
										<strong>Revenue: </strong> ${movieDetails.revenue}
									</p>
								</div>
							</div>
						</div>
					</div>
				</>
			);
		}
	};

	return renderMovieDetails();
};

export default MovieView;
