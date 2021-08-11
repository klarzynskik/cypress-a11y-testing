function Button({ type, ...otherProps }) {
  return <button type={type} className={type} {...otherProps} />;
}

export default Button;
