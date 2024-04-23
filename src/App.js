import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutView from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SearchView from "./components/SearchView";

function App() {
	const [searchResults, setSearchResults] = useState([]);
     const [searchText, setSearchText] = useState("")

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutView />} />
				<Route path="/search" element={<SearchView keyword = {searchText} searchResults = {searchResults}/>} />
			</Routes>
		</div>
	);
}

export default App;
