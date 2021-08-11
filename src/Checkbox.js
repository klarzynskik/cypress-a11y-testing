function Checkbox({ label, availableOptions, ...otherProps }) {
  const checkboxElements = availableOptions.map((option) => (
    <div key={option}>
      <input type="checkbox" id={option} name={option} {...otherProps}/>
      <label className="checkboxLabel">
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </label>
    </div>
  ));

  return (
    <div className="formElement">
      <p>{label}</p>
      {checkboxElements}
    </div>
  );
}

export default Checkbox;
