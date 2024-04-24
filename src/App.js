import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutView from "./components/About";
import MovieView from "./components/MovieView";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchView from "./components/SearchView";

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [searchText, setSearchText] = useState("");
	const fetch = require("node-fetch");

	useEffect(() => {
		const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`;
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization: process.env.REACT_APP_TMD_BEARER,
			},
		};

		fetch(url, options)
			.then((res) => res.json())
			.then((json) => {
				setSearchResults(json.results);
			})
			.catch((err) => console.error("error:" + err));
	}, [searchText, fetch]);

	return (
		<div className="App">
			<Navbar searchText={searchText} setSearchText={setSearchText} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutView />} />
				<Route
					path="/search"
					element={
						<SearchView keyword={searchText} searchResults={searchResults} />
					}
				/>
				<Route path="/movie/:id" element={<MovieView/>}/>
			</Routes>
		</div>
	);
}

export default App;
