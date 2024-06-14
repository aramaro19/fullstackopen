const Filter = ({ search, handleOnChange }) => {
    return <div>
      find countries
      <input value={search} onChange={handleOnChange}/>
    </div>
}

export default Filter