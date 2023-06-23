const fixedInputClass =
  "rounded-md w-full relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
  options,
}) {
  const handleRadioChange = (e) => {
    handleChange({ target: { id, value: e.target.value } });
  };

  if (type === "radio" && options && options.length > 0) {
    return (
      <div className="my-8 pt-4">
        <label className="sr-only">{labelText}</label>
        <div className="flex items-center">
          {options.map((option) => (
            <div key={option.value} className="flex items-center mr-4">
              <input
                type="radio"
                id={option.value}
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={handleRadioChange}
                required={isRequired}
                className={fixedInputClass + " mr-2"}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </div>
  );
}
