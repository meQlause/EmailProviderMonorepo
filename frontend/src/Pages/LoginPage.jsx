import { useState } from "react";

import RightPanel from "../Components/views/Auth/Login/RightPanel";
import AuthLayout from "../Components/layouts/AuthLayout";
import LoginForm from "../Components/views/Auth/Login";

const LoginPage = () => {
  const [selectedInput, setSelectedInput] = useState("");

  return (
    <AuthLayout title="Login">
      <LoginForm
        selectedInput={selectedInput}
        setSelectedInput={setSelectedInput}
      />
      <RightPanel />
    </AuthLayout>
  );
};

export default LoginPage;
