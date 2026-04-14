function SearchBar() {
  return (
    <div className="search-box">
      <input placeholder="Enter Location" />
      <input placeholder="Max Price" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;