import AnimatedDiv from "./AnimatedDiv";

const Button = ({ children, secondary, delay = 0, ...props }) => (
  <AnimatedDiv delay={delay}>
    <button
      className={`w-full my-4 py-3 rounded-4xl font-['Inter'] transition ${
        secondary
          ? "flex gap-1 border border-gray-300 items-center justify-center bg-white text-black font-medium"
          : "bg-[#11add1] text-white font-thin"
      }`}
      {...props}
    >
      {children}
    </button>
  </AnimatedDiv>
);

export default Button;