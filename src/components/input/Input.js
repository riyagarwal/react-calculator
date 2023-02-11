import "./Input.css";
function Input( {name, placeholder, onChange, value} ) {
  return (
    <div>
      <input
        type="text"
        name= {name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Input;
