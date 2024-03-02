type InputProps = {
  type: string;
  placeholder: string;
  _class: string;
  Name: string;
};

export default function Input({ type, placeholder, _class, Name }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={_class}
      name={Name}
      required
    />
  );
}
