import "./Input.css";

export const Input = ({ value, onChange, type, id, ...props }) => {
  return (
    <input type={type} value={value} onChange={onChange} id={id} {...props} />
  );
};
