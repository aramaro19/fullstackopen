
const PersonForm = ({ onSubmitHandler, nameInputValue, nameOnChangeHandler, numberInputValue, numberOnChangeHandler }) => {
    return (
      <form onSubmit={onSubmitHandler}>
          <div>
            name: <input 
              value={nameInputValue}
              onChange={nameOnChangeHandler}/>
          </div>
          <div>
            number: <input
              value={numberInputValue}
              onChange={numberOnChangeHandler}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
  }

export default PersonForm