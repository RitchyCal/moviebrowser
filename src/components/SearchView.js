import Hero from "./Hero";
import MovieCard from "./MovieCard";
const SearchView = ({ keyword, searchResults }) => {
	const title = `You are searching for ${keyword}`;
	const resultHtml = searchResults.map((obj, i) => {
		return <MovieCard movie={obj} key = {i} />;
	});
	return (
		<>
			<Hero text={title} />
			{resultHtml && 
				<div className="container">
					<div className="row">
                        {resultHtml}
                    </div>
				</div>
			}
		</>
	);
};

export default SearchView;
