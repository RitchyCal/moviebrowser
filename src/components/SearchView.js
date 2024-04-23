import Hero from "./Hero"

const SearchView = ({keyword, searchResults}) => {
    const resultHtml =  searchResults.map((obj, i) => {
        return <div key= {i}>{obj.original_title}</div>
    })
    return( 
        <>
            <Hero text={"You are searching for " + keyword}/>
            {resultHtml}
        </>
    )
}

export default SearchView