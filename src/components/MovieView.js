import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

const MovieView = () => {
	const { id } = useParams();
	const [movieDetails, setMovieDetails] = useState({});
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
			})
			.catch((err) => console.error("error:" + err));
	}, [fetch, id]);

	console.log(id);
	return (
		<>
			<Hero text={movieDetails.original_title} />
		</>
	);
};

export default MovieView;
