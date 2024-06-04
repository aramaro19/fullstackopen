const Filter = ({ inputValue, onChangeHandler }) => {
    return (
      <div>filter shown with <input
        value={inputValue}
        onChange={onChangeHandler}
        />
      </div>
    )
  }

export default Filter