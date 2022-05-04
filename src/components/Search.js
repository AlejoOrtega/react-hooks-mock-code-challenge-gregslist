import React, {useState} from "react";

function Search({onSubmit}) {

  const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(search)
  }

  const handleOnChange = (e) => {
    setSearch(() => e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleOnChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
