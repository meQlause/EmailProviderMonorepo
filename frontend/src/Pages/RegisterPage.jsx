import { useState } from "react";
import AuthLayout from "../Components/layouts/AuthLayout/index.jsx";
import RegisterForm from "../Components/views/Auth/Register/Index.jsx.jsx";
import PageHead from "../Components/commons/PageHead.jsx";
import RightPanel from "../Components/views/Auth/Login/RightPanel.jsx";

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
