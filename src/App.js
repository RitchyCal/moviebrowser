import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutView from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element = {<Home/>}/>
				<Route path="/about" element = {<AboutView/>}/>
			</Routes>
		</div>
	);
}

export default App;
