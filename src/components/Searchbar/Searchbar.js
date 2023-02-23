

function Searchbar({onSubmit}) {
    
    const submit = (event) => {
    event.preventDefault()

          onSubmit(event.target.elements[1].value)
}


    return (

        <header className="Searchbar">
  <form className="SearchForm" onSubmit={submit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}


export default Searchbar