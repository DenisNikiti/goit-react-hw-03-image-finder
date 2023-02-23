function Button({ load }) {
    
    const click = () => {
      load()

  }


    return (
        <button type="button" className="Button" onClick={click}>Load More</button>
    )
}
export default Button