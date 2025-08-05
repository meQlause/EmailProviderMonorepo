import AnimatedDiv from "../Animation/AnimatedDiv";


const InputField = ({
  icon: Icon,
  type = "text",
  placeholder,
  isSelected,
  onFocus,
  onBlur,
  delay,
}) => (
  <AnimatedDiv
    className="flex w-full bg-white px-7 py-4 rounded-4xl border border-gray-300 focus-within:border-blue-500 transition"
    delay={delay}
  >
    <Icon className={`mr-3 w-8 ${isSelected ? "text-blue-500" : ""}`} />
    <div className="h-6 border-r border-gray-300 mr-3" />
    <input
      type={type}
      className="focus:outline-none flex-1"
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </AnimatedDiv>
);

export default InputField;