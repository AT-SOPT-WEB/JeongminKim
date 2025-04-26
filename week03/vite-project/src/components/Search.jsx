const Search = ({ search, handleSearchChange }) => {
    return <input type="text" value={search} onChange={handleSearchChange} />;
};

export default Search;
