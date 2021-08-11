function TextInput({ label, id, ...otherProps}) {
  return (
    <div className="formElement">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type="text" {...otherProps}/>
    </div>
  );
}

export default TextInput;
