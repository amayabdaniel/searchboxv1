import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts)
    
    const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

    setSearchResults(resultsArray)
  }
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter an item name..."
          id="search"
          onChange={handleSearchChange}
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
}

export default SearchBar