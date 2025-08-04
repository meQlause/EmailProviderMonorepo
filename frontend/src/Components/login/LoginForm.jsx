import { Mail, Lock } from "lucide-react";
import AnimatedDiv from "./AnimatedDiv";
import InputField from "./InputField";
import Button from "./Button";
import GoogleIcon from "./GoogleIcon";

const LoginForm = ({ selectedInput, setSelectedInput }) => (
  <AnimatedDiv delay={0.7}>
    <form className="flex flex-col gap-3">
      <InputField
        icon={Mail}
        placeholder="Email"
        isSelected={selectedInput === "email"}
        onFocus={() => setSelectedInput("email")}
        onBlur={() => setSelectedInput("")}
        delay={0.8}
      />
      <InputField
        icon={Lock}
        type="password"
        placeholder="Password"
        isSelected={selectedInput === "password"}
        onFocus={() => setSelectedInput("password")}
        onBlur={() => setSelectedInput("")}
        delay={0.9}
      />
      <Button type="submit" delay={1.0}>
        Sign Up
      </Button>

      <AnimatedDiv className="flex items-center my-0" delay={1.1}>
        <div className="flex-grow h-px bg-gray-300" />
        <span className="mx-4 text-gray-500 text-sm">or</span>
        <div className="flex-grow h-px bg-gray-300" />
      </AnimatedDiv>

      <Button secondary type="submit" delay={1.2}>
        <GoogleIcon />
        Sign Up With Google
      </Button>
    </form>
  </AnimatedDiv>
);

export default LoginForm;