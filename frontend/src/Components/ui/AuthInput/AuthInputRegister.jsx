import { Mail, Lock, User } from "lucide-react";
import GoogleIcon from "./GoogleIcon";
import Button from "../Button";
import AnimatedDiv from "../Animation/AnimatedDiv";
import InputField from "./InputField";

const AuthInputRegister = ({ selectedInput, setSelectedInput }) => (
  <AnimatedDiv delay={0.7}>
    <form className="flex flex-col gap-3">
      <InputField
        icon={User}
        type="text"
        placeholder="Username"
        isSelected={selectedInput === "text"}
        onFocus={() => setSelectedInput("text")}
        onBlur={() => setSelectedInput("")}
        delay={0.8}
      />
      <InputField
        icon={Mail}
        type="email"
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
      <InputField
        icon={Lock}
        type="password"
        placeholder="Confirm Password"
        isSelected={selectedInput === "ConfirmPassword"}
        onFocus={() => setSelectedInput("ConfirmPassword")}
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

export default AuthInputRegister;