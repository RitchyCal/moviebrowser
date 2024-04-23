import Hero from "./Hero"

const SearchView = ({keyword, searchResults}) => {
    return( 
        <>
            <Hero text={keyword}/>
        </>
    )
}

export default SearchView