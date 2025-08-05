import AnimatedDiv from "../../../ui/Animation/AnimatedDiv";
import AuthInputRegister from "../../../ui/AuthInput/AuthInputRegister";

const RegisterForm = ({ selectedInput, setSelectedInput }) => (
  <AnimatedDiv
    className="bg-[#f8f8f8] px-20 py-10 w-[550px] h-[700px] rounded-4xl flex flex-col"
    delay={0.1}
  >
    <div className="flex flex-col gap-7">
      <AnimatedDiv delay={0.3}>
        <h1 className="text-2xl font-['Poppins'] font-thin">EmailProvider</h1>
      </AnimatedDiv>

      <AnimatedDiv className="flex gap-2 flex-col" delay={0.4}>
        {/* <span className="text-4xl font-['Manrope'] font-medium">
          Sign Up
        </span> */}
        <span className="text-4xl font-['Manrope'] font-bold">
          Sign Up
        </span>
      </AnimatedDiv>

      <div className="flex flex-col gap-4">
        {/* <AnimatedDiv delay={0.6}>
          <p className="text-sm text-[#868686] font-thin">
            Gaze and attention modeling Powered by AI is optimizing virtual
            reality experiences
          </p>
        </AnimatedDiv> */}

        <AuthInputRegister
          selectedInput={selectedInput}
          setSelectedInput={setSelectedInput}
        />

        <AnimatedDiv className="mx-auto font-['Inter'] font-light" delay={1.3}>
          <p>
            Already have an account? Sign in{" "}
            <span className="text-blue-500 cursor-pointer">here</span>
          </p>
        </AnimatedDiv>
      </div>
    </div>
  </AnimatedDiv>
);

export default RegisterForm;