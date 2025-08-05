import { useState } from "react";
import AuthLayout from "../Components/layouts/AuthLayout";
import RightPanel from "../Components/views/Auth/login/RightPanel.jsx";
import RegisterForm from "../Components/views/Auth/Register/Index.jsx";
import PageHead from "../Components/commons/PageHead.jsx";

const RegisterPage = () => {
  const [selectedInput, setSelectedInput] = useState("");
  PageHead("Register");

  return (
    <AuthLayout>
      <RegisterForm
        selectedInput={selectedInput}
        setSelectedInput={setSelectedInput}
      />
      <RightPanel />
    </AuthLayout>
  );
};

export default RegisterPage;
