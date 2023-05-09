import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const searchBar = ({posts, setSearchResult}) => {
    const handelsubmit = (e) => e.preventDefault()

    const handelSearchChange = (e) => {
        if (!e.target.value) return setSearchResult(posts)

        const resultsArray = posts.filter(posts => posts.title.includes(e.target.value) || 
        posts.body.includes(e.target.value))

        setSearchResult(resultsArray)
    }

    return (
        <header>
            <form className="search" onSubmit={handelsubmit}> 
                   <input className="search_input"
                   text="text"
                   id="search"
                   onchange={handelSearchChange} 
                />
                <button className="search_button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </header>
    )
}

export default searchBar