import { useState } from "react";
import AuthLayout from "../Components/layouts/AuthLayout";
import RightPanel from "../Components/views/Auth/login/RightPanel";
import LoginForm from "../Components/views/Auth/Login";
import PageHead from "../Components/commons/PageHead";

const LoginPage = () => {
  const [selectedInput, setSelectedInput] = useState("");
  PageHead("Login");

  return (
    <AuthLayout>
      <LoginForm
        selectedInput={selectedInput}
        setSelectedInput={setSelectedInput}
      />
      <RightPanel />
    </AuthLayout>
  );
};

export default LoginPage;
